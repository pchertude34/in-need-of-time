declare global {
    interface Window {
      gm_authFailure: any;
      __sanity_googlePlacesApiCallback: any;
      callback: any;
    }
  }
  
  const callbackName = '__sanity_googlePlacesApiCallback';
  const authFailureCallbackName = 'gm_authFailure';
  
  export class AuthError extends Error {}
  
  /**
   * Function to handle the actual loading of the google maps api script tag.
   * Place a script tag in the DOM to load the google maps api and handle the callbacks to manage load states
   * @param config googlePlacesApi config with locale and apiKey as strings
   * @returns Google Maps API Proimse
   */
  function _loadGoogleMapsApi(config: { locale: string; apiKey: string }) {
    return new Promise<typeof window.google.maps>((resolve, reject) => {
      window[authFailureCallbackName] = () => {
        reject(new AuthError('Authentication error when loading Google Maps API.'));
      };
  
      window[callbackName] = () => {
        resolve(window.google.maps);
      };
  
      const script = document.createElement('script');
      script.onerror = (
        event: Event | string,
        source?: string,
        lineno?: number,
        colno?: number,
        error?: Error
      ) => reject(new Error(coeerceError(event, error)));
  
      script.src = `https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&libraries=places&callback=${callbackName}&language=${config.locale}`;
      document.getElementsByTagName('head')[0]?.appendChild(script);
    }).finally(() => {
      delete window[callbackName];
      delete window[authFailureCallbackName];
    });
  }
  
  // Store an instance of the loaded google maps api
  let memo: Promise<typeof window.google.maps> | null = null;
  
  /**
   * Helper function to handle memoizing the google maps api to avoid duplicate loads across the application
   * @param config googlePlacesApi config with locale and apiKey as strings
   * @returns a memoized instance of the google maps api result
   */
  export function loadGoogleMapsApi(config: { locale: string; apiKey: string }) {
    if (memo) return memo;
    memo = _loadGoogleMapsApi(config);
    memo.catch(() => {
      memo = null;
    });
  
    return memo;
  }
  
  /**
   * Strigify an error if one occurs while loading the google maps api
   * @param event DOM event, or a string representing the DOM event
   * @param error Error object
   * @returns A strigified error message
   */
  function coeerceError(event: Event | string, error?: Error): string {
    if (error) {
      return error.message;
    }
  
    if (typeof event === 'string') {
      return event;
    }
  
    return isErrorEvent(event) ? event.message : 'Failed to load Google Maps API';
  }
  
  /**
   * Check if an event is an ErrorEvent
   * @param event An unknown object to check wheather it is an ErrorEvent type or not
   * @returns Boolean - true if the event is an error, otherwise false
   */
  function isErrorEvent(event: unknown): event is ErrorEvent {
    if (typeof event !== 'object' || event === null) {
      return false;
    }
  
    if (!('message' in event)) {
      return false;
    }
  
    return typeof (event as ErrorEvent).message === 'string';
  }