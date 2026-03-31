(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  306866,
  (e) => {
    "use strict";
    let t, i, s, r, n, a, o;
    var u = e.i(802252);
    e.i(676572);
    var l = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: (e) => clearInterval(e),
      },
      c = new (class {
        #e = l;
        #t = !1;
        setTimeoutProvider(e) {
          this.#e = e;
        }
        setTimeout(e, t) {
          return this.#e.setTimeout(e, t);
        }
        clearTimeout(e) {
          this.#e.clearTimeout(e);
        }
        setInterval(e, t) {
          return this.#e.setInterval(e, t);
        }
        clearInterval(e) {
          this.#e.clearInterval(e);
        }
      })(),
      h = "undefined" == typeof window || "Deno" in globalThis;
    function d() {}
    function f(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function p(e, t) {
      let { type: i = "all", exact: s, fetchStatus: r, predicate: n, queryKey: a, stale: o } = e;
      if (a) {
        if (s) {
          if (t.queryHash !== m(a, t.options)) return !1;
        } else if (!g(t.queryKey, a)) return !1;
      }
      if ("all" !== i) {
        let e = t.isActive();
        if (("active" === i && !e) || ("inactive" === i && e)) return !1;
      }
      return ("boolean" != typeof o || t.isStale() === o) && (!r || r === t.state.fetchStatus) && (!n || !!n(t));
    }
    function v(e, t) {
      let { exact: i, status: s, predicate: r, mutationKey: n } = e;
      if (n) {
        if (!t.options.mutationKey) return !1;
        if (i) {
          if (y(t.options.mutationKey) !== y(n)) return !1;
        } else if (!g(t.options.mutationKey, n)) return !1;
      }
      return (!s || t.state.status === s) && (!r || !!r(t));
    }
    function m(e, t) {
      return (t?.queryKeyHashFn || y)(e);
    }
    function y(e) {
      return JSON.stringify(e, (e, t) =>
        C(t)
          ? Object.keys(t)
              .sort()
              .reduce((e, i) => ((e[i] = t[i]), e), {})
          : t,
      );
    }
    function g(e, t) {
      return (
        e === t ||
        (typeof e == typeof t &&
          !!e &&
          !!t &&
          "object" == typeof e &&
          "object" == typeof t &&
          Object.keys(t).every((i) => g(e[i], t[i])))
      );
    }
    var b = Object.prototype.hasOwnProperty;
    function w(e) {
      return Array.isArray(e) && e.length === Object.keys(e).length;
    }
    function C(e) {
      if (!E(e)) return !1;
      let t = e.constructor;
      if (void 0 === t) return !0;
      let i = t.prototype;
      return !!E(i) && !!i.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype;
    }
    function E(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function P(e, t, i = 0) {
      let s = [...e, t];
      return i && s.length > i ? s.slice(1) : s;
    }
    function x(e, t, i = 0) {
      let s = [t, ...e];
      return i && s.length > i ? s.slice(0, -1) : s;
    }
    var O = Symbol();
    function R(e, t) {
      return !e.queryFn && t?.initialPromise
        ? () => t.initialPromise
        : e.queryFn && e.queryFn !== O
          ? e.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
    }
    var S =
        ((t = []),
        (i = 0),
        (s = (e) => {
          e();
        }),
        (r = (e) => {
          e();
        }),
        (n = function (e) {
          setTimeout(e, 0);
        }),
        {
          batch: (e) => {
            let a;
            i++;
            try {
              a = e();
            } finally {
              let e;
              --i ||
                ((e = t),
                (t = []),
                e.length &&
                  n(() => {
                    r(() => {
                      e.forEach((e) => {
                        s(e);
                      });
                    });
                  }));
            }
            return a;
          },
          batchCalls:
            (e) =>
            (...t) => {
              a(() => {
                e(...t);
              });
            },
          schedule: (a = (e) => {
            i
              ? t.push(e)
              : n(() => {
                  s(e);
                });
          }),
          setNotifyFunction: (e) => {
            s = e;
          },
          setBatchNotifyFunction: (e) => {
            r = e;
          },
          setScheduler: (e) => {
            n = e;
          },
        }),
      T = class {
        constructor() {
          ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              (this.listeners.delete(e), this.onUnsubscribe());
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      },
      M = new (class extends T {
        #i;
        #s;
        #r;
        constructor() {
          (super(),
            (this.#r = (e) => {
              if (!h && window.addEventListener) {
                let t = () => e();
                return (
                  window.addEventListener("visibilitychange", t, !1),
                  () => {
                    window.removeEventListener("visibilitychange", t);
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#s || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#s?.(), (this.#s = void 0));
        }
        setEventListener(e) {
          ((this.#r = e),
            this.#s?.(),
            (this.#s = e((e) => {
              "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
            })));
        }
        setFocused(e) {
          this.#i !== e && ((this.#i = e), this.onFocus());
        }
        onFocus() {
          let e = this.isFocused();
          this.listeners.forEach((t) => {
            t(e);
          });
        }
        isFocused() {
          return "boolean" == typeof this.#i ? this.#i : globalThis.document?.visibilityState !== "hidden";
        }
      })(),
      q = new (class extends T {
        #n = !0;
        #s;
        #r;
        constructor() {
          (super(),
            (this.#r = (e) => {
              if (!h && window.addEventListener) {
                let t = () => e(!0),
                  i = () => e(!1);
                return (
                  window.addEventListener("online", t, !1),
                  window.addEventListener("offline", i, !1),
                  () => {
                    (window.removeEventListener("online", t), window.removeEventListener("offline", i));
                  }
                );
              }
            }));
        }
        onSubscribe() {
          this.#s || this.setEventListener(this.#r);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#s?.(), (this.#s = void 0));
        }
        setEventListener(e) {
          ((this.#r = e), this.#s?.(), (this.#s = e(this.setOnline.bind(this))));
        }
        setOnline(e) {
          this.#n !== e &&
            ((this.#n = e),
            this.listeners.forEach((t) => {
              t(e);
            }));
        }
        isOnline() {
          return this.#n;
        }
      })();
    function F(e) {
      return Math.min(1e3 * 2 ** e, 3e4);
    }
    function D(e) {
      return (e ?? "online") !== "online" || q.isOnline();
    }
    var j = class extends Error {
      constructor(e) {
        (super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent));
      }
    };
    function A(e) {
      let t,
        i = !1,
        s = 0,
        r = (function () {
          let e,
            t,
            i = new Promise((i, s) => {
              ((e = i), (t = s));
            });
          function s(e) {
            (Object.assign(i, e), delete i.resolve, delete i.reject);
          }
          return (
            (i.status = "pending"),
            i.catch(() => {}),
            (i.resolve = (t) => {
              (s({ status: "fulfilled", value: t }), e(t));
            }),
            (i.reject = (e) => {
              (s({ status: "rejected", reason: e }), t(e));
            }),
            i
          );
        })(),
        n = () => M.isFocused() && ("always" === e.networkMode || q.isOnline()) && e.canRun(),
        a = () => D(e.networkMode) && e.canRun(),
        o = (e) => {
          "pending" === r.status && (t?.(), r.resolve(e));
        },
        u = (e) => {
          "pending" === r.status && (t?.(), r.reject(e));
        },
        l = () =>
          new Promise((i) => {
            ((t = (e) => {
              ("pending" !== r.status || n()) && i(e);
            }),
              e.onPause?.());
          }).then(() => {
            ((t = void 0), "pending" === r.status && e.onContinue?.());
          }),
        d = () => {
          let t;
          if ("pending" !== r.status) return;
          let a = 0 === s ? e.initialPromise : void 0;
          try {
            t = a ?? e.fn();
          } catch (e) {
            t = Promise.reject(e);
          }
          Promise.resolve(t)
            .then(o)
            .catch((t) => {
              if ("pending" !== r.status) return;
              let a = e.retry ?? 3 * !h,
                o = e.retryDelay ?? F,
                f = "function" == typeof o ? o(s, t) : o,
                p = !0 === a || ("number" == typeof a && s < a) || ("function" == typeof a && a(s, t));
              i || !p
                ? u(t)
                : (s++,
                  e.onFail?.(s, t),
                  new Promise((e) => {
                    c.setTimeout(e, f);
                  })
                    .then(() => (n() ? void 0 : l()))
                    .then(() => {
                      i ? u(t) : d();
                    }));
            });
        };
      return {
        promise: r,
        status: () => r.status,
        cancel: (t) => {
          if ("pending" === r.status) {
            let i = new j(t);
            (u(i), e.onCancel?.(i));
          }
        },
        continue: () => (t?.(), r),
        cancelRetry: () => {
          i = !0;
        },
        continueRetry: () => {
          i = !1;
        },
        canStart: a,
        start: () => (a() ? d() : l().then(d), r),
      };
    }
    var k = class {
        #a;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          var e;
          (this.clearGcTimeout(),
            "number" == typeof (e = this.gcTime) &&
              e >= 0 &&
              e !== 1 / 0 &&
              (this.#a = c.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)));
        }
        updateGcTime(e) {
          this.gcTime = Math.max(this.gcTime || 0, e ?? (h ? 1 / 0 : 3e5));
        }
        clearGcTimeout() {
          this.#a && (c.clearTimeout(this.#a), (this.#a = void 0));
        }
      },
      I = class extends k {
        #o;
        #u;
        #l;
        #c;
        #h;
        #d;
        #f;
        constructor(e) {
          (super(),
            (this.#f = !1),
            (this.#d = e.defaultOptions),
            this.setOptions(e.options),
            (this.observers = []),
            (this.#c = e.client),
            (this.#l = this.#c.getQueryCache()),
            (this.queryKey = e.queryKey),
            (this.queryHash = e.queryHash),
            (this.#o = N(this.options)),
            (this.state = e.state ?? this.#o),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          return this.#h?.promise;
        }
        setOptions(e) {
          if (
            ((this.options = { ...this.#d, ...e }),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let e = N(this.options);
            void 0 !== e.data && (this.setState(L(e.data, e.dataUpdatedAt)), (this.#o = e));
          }
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.#l.remove(this);
        }
        setData(e, t) {
          var i, s;
          let r =
            ((i = this.state.data),
            "function" == typeof (s = this.options).structuralSharing
              ? s.structuralSharing(i, e)
              : !1 !== s.structuralSharing
                ? (function e(t, i) {
                    if (t === i) return t;
                    let s = w(t) && w(i);
                    if (!s && !(C(t) && C(i))) return i;
                    let r = (s ? t : Object.keys(t)).length,
                      n = s ? i : Object.keys(i),
                      a = n.length,
                      o = s ? Array(a) : {},
                      u = 0;
                    for (let l = 0; l < a; l++) {
                      let a = s ? l : n[l],
                        c = t[a],
                        h = i[a];
                      if (c === h) {
                        ((o[a] = c), (s ? l < r : b.call(t, a)) && u++);
                        continue;
                      }
                      if (null === c || null === h || "object" != typeof c || "object" != typeof h) {
                        o[a] = h;
                        continue;
                      }
                      let d = e(c, h);
                      ((o[a] = d), d === c && u++);
                    }
                    return r === a && u === r ? t : o;
                  })(i, e)
                : e);
          return (this.#p({ data: r, type: "success", dataUpdatedAt: t?.updatedAt, manual: t?.manual }), r);
        }
        setState(e, t) {
          this.#p({ type: "setState", state: e, setStateOptions: t });
        }
        cancel(e) {
          let t = this.#h?.promise;
          return (this.#h?.cancel(e), t ? t.then(d).catch(d) : Promise.resolve());
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(this.#o));
        }
        isActive() {
          return this.observers.some((e) => {
            var t;
            return !1 !== ((t = e.options.enabled), "function" == typeof t ? t(this) : t);
          });
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === O || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return this.getObserversCount() > 0 && this.observers.some((e) => "static" === f(e.options.staleTime, this));
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((e) => e.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(e = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== e &&
              (!!this.state.isInvalidated || !Math.max(this.state.dataUpdatedAt + (e || 0) - Date.now(), 0)))
          );
        }
        onFocus() {
          let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
          (e?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
        }
        onOnline() {
          let e = this.observers.find((e) => e.shouldFetchOnReconnect());
          (e?.refetch({ cancelRefetch: !1 }), this.#h?.continue());
        }
        addObserver(e) {
          this.observers.includes(e) ||
            (this.observers.push(e),
            this.clearGcTimeout(),
            this.#l.notify({ type: "observerAdded", query: this, observer: e }));
        }
        removeObserver(e) {
          this.observers.includes(e) &&
            ((this.observers = this.observers.filter((t) => t !== e)),
            this.observers.length ||
              (this.#h && (this.#f ? this.#h.cancel({ revert: !0 }) : this.#h.cancelRetry()), this.scheduleGc()),
            this.#l.notify({ type: "observerRemoved", query: this, observer: e }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.#p({ type: "invalidate" });
        }
        async fetch(e, t) {
          let i;
          if ("idle" !== this.state.fetchStatus && this.#h?.status() !== "rejected") {
            if (void 0 !== this.state.data && t?.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.#h) return (this.#h.continueRetry(), this.#h.promise);
          }
          if ((e && this.setOptions(e), !this.options.queryFn)) {
            let e = this.observers.find((e) => e.options.queryFn);
            e && this.setOptions(e.options);
          }
          let s = new AbortController(),
            r = (e) => {
              Object.defineProperty(e, "signal", { enumerable: !0, get: () => ((this.#f = !0), s.signal) });
            },
            n = () => {
              let e,
                i = R(this.options, t),
                s = (r((e = { client: this.#c, queryKey: this.queryKey, meta: this.meta })), e);
              return ((this.#f = !1), this.options.persister) ? this.options.persister(i, s, this) : i(s);
            },
            a =
              (r(
                (i = {
                  fetchOptions: t,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#c,
                  state: this.state,
                  fetchFn: n,
                }),
              ),
              i);
          (this.options.behavior?.onFetch(a, this),
            (this.#u = this.state),
            ("idle" === this.state.fetchStatus || this.state.fetchMeta !== a.fetchOptions?.meta) &&
              this.#p({ type: "fetch", meta: a.fetchOptions?.meta }),
            (this.#h = A({
              initialPromise: t?.initialPromise,
              fn: a.fetchFn,
              onCancel: (e) => {
                (e instanceof j && e.revert && this.setState({ ...this.#u, fetchStatus: "idle" }), s.abort());
              },
              onFail: (e, t) => {
                this.#p({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#p({ type: "pause" });
              },
              onContinue: () => {
                this.#p({ type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })));
          try {
            let e = await this.#h.start();
            if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(e),
              this.#l.config.onSuccess?.(e, this),
              this.#l.config.onSettled?.(e, this.state.error, this),
              e
            );
          } catch (e) {
            if (e instanceof j) {
              if (e.silent) return this.#h.promise;
              else if (e.revert) {
                if (void 0 === this.state.data) throw e;
                return this.state.data;
              }
            }
            throw (
              this.#p({ type: "error", error: e }),
              this.#l.config.onError?.(e, this),
              this.#l.config.onSettled?.(this.state.data, e, this),
              e
            );
          } finally {
            this.scheduleGc();
          }
        }
        #p(e) {
          let t = (t) => {
            switch (e.type) {
              case "failed":
                return { ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
              case "pause":
                return { ...t, fetchStatus: "paused" };
              case "continue":
                return { ...t, fetchStatus: "fetching" };
              case "fetch":
                var i;
                return {
                  ...t,
                  ...((i = t.data),
                  {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: D(this.options.networkMode) ? "fetching" : "paused",
                    ...(void 0 === i && { error: null, status: "pending" }),
                  }),
                  fetchMeta: e.meta ?? null,
                };
              case "success":
                let s = {
                  ...t,
                  ...L(e.data, e.dataUpdatedAt),
                  dataUpdateCount: t.dataUpdateCount + 1,
                  ...(!e.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
                };
                return ((this.#u = e.manual ? s : void 0), s);
              case "error":
                let r = e.error;
                return {
                  ...t,
                  error: r,
                  errorUpdateCount: t.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: t.fetchFailureCount + 1,
                  fetchFailureReason: r,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...t, isInvalidated: !0 };
              case "setState":
                return { ...t, ...e.state };
            }
          };
          ((this.state = t(this.state)),
            S.batch(() => {
              (this.observers.forEach((e) => {
                e.onQueryUpdate();
              }),
                this.#l.notify({ query: this, type: "updated", action: e }));
            }));
        }
      };
    function L(e, t) {
      return { data: e, dataUpdatedAt: t ?? Date.now(), error: null, isInvalidated: !1, status: "success" };
    }
    function N(e) {
      let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
        i = void 0 !== t,
        s = i ? ("function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
      return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: i ? (s ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: i ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    var K = class extends T {
        constructor(e = {}) {
          (super(), (this.config = e), (this.#v = new Map()));
        }
        #v;
        build(e, t, i) {
          let s = t.queryKey,
            r = t.queryHash ?? m(s, t),
            n = this.get(r);
          return (
            n ||
              ((n = new I({
                client: e,
                queryKey: s,
                queryHash: r,
                options: e.defaultQueryOptions(t),
                state: i,
                defaultOptions: e.getQueryDefaults(s),
              })),
              this.add(n)),
            n
          );
        }
        add(e) {
          this.#v.has(e.queryHash) || (this.#v.set(e.queryHash, e), this.notify({ type: "added", query: e }));
        }
        remove(e) {
          let t = this.#v.get(e.queryHash);
          t && (e.destroy(), t === e && this.#v.delete(e.queryHash), this.notify({ type: "removed", query: e }));
        }
        clear() {
          S.batch(() => {
            this.getAll().forEach((e) => {
              this.remove(e);
            });
          });
        }
        get(e) {
          return this.#v.get(e);
        }
        getAll() {
          return [...this.#v.values()];
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => p(t, e));
        }
        findAll(e = {}) {
          let t = this.getAll();
          return Object.keys(e).length > 0 ? t.filter((t) => p(e, t)) : t;
        }
        notify(e) {
          S.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        onFocus() {
          S.batch(() => {
            this.getAll().forEach((e) => {
              e.onFocus();
            });
          });
        }
        onOnline() {
          S.batch(() => {
            this.getAll().forEach((e) => {
              e.onOnline();
            });
          });
        }
      },
      Q = class extends k {
        #c;
        #m;
        #y;
        #h;
        constructor(e) {
          (super(),
            (this.#c = e.client),
            (this.mutationId = e.mutationId),
            (this.#y = e.mutationCache),
            (this.#m = []),
            (this.state = e.state || {
              context: void 0,
              data: void 0,
              error: null,
              failureCount: 0,
              failureReason: null,
              isPaused: !1,
              status: "idle",
              variables: void 0,
              submittedAt: 0,
            }),
            this.setOptions(e.options),
            this.scheduleGc());
        }
        setOptions(e) {
          ((this.options = e), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(e) {
          this.#m.includes(e) ||
            (this.#m.push(e),
            this.clearGcTimeout(),
            this.#y.notify({ type: "observerAdded", mutation: this, observer: e }));
        }
        removeObserver(e) {
          ((this.#m = this.#m.filter((t) => t !== e)),
            this.scheduleGc(),
            this.#y.notify({ type: "observerRemoved", mutation: this, observer: e }));
        }
        optionalRemove() {
          this.#m.length || ("pending" === this.state.status ? this.scheduleGc() : this.#y.remove(this));
        }
        continue() {
          return this.#h?.continue() ?? this.execute(this.state.variables);
        }
        async execute(e) {
          let t = () => {
              this.#p({ type: "continue" });
            },
            i = { client: this.#c, meta: this.options.meta, mutationKey: this.options.mutationKey };
          this.#h = A({
            fn: () =>
              this.options.mutationFn ? this.options.mutationFn(e, i) : Promise.reject(Error("No mutationFn found")),
            onFail: (e, t) => {
              this.#p({ type: "failed", failureCount: e, error: t });
            },
            onPause: () => {
              this.#p({ type: "pause" });
            },
            onContinue: t,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#y.canRun(this),
          });
          let s = "pending" === this.state.status,
            r = !this.#h.canStart();
          try {
            if (s) t();
            else {
              (this.#p({ type: "pending", variables: e, isPaused: r }), await this.#y.config.onMutate?.(e, this, i));
              let t = await this.options.onMutate?.(e, i);
              t !== this.state.context && this.#p({ type: "pending", context: t, variables: e, isPaused: r });
            }
            let n = await this.#h.start();
            return (
              await this.#y.config.onSuccess?.(n, e, this.state.context, this, i),
              await this.options.onSuccess?.(n, e, this.state.context, i),
              await this.#y.config.onSettled?.(n, null, this.state.variables, this.state.context, this, i),
              await this.options.onSettled?.(n, null, e, this.state.context, i),
              this.#p({ type: "success", data: n }),
              n
            );
          } catch (t) {
            try {
              throw (
                await this.#y.config.onError?.(t, e, this.state.context, this, i),
                await this.options.onError?.(t, e, this.state.context, i),
                await this.#y.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, i),
                await this.options.onSettled?.(void 0, t, e, this.state.context, i),
                t
              );
            } finally {
              this.#p({ type: "error", error: t });
            }
          } finally {
            this.#y.runNext(this);
          }
        }
        #p(e) {
          ((this.state = ((t) => {
            switch (e.type) {
              case "failed":
                return { ...t, failureCount: e.failureCount, failureReason: e.error };
              case "pause":
                return { ...t, isPaused: !0 };
              case "continue":
                return { ...t, isPaused: !1 };
              case "pending":
                return {
                  ...t,
                  context: e.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: e.isPaused,
                  status: "pending",
                  variables: e.variables,
                  submittedAt: Date.now(),
                };
              case "success":
                return {
                  ...t,
                  data: e.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...t,
                  data: void 0,
                  error: e.error,
                  failureCount: t.failureCount + 1,
                  failureReason: e.error,
                  isPaused: !1,
                  status: "error",
                };
            }
          })(this.state)),
            S.batch(() => {
              (this.#m.forEach((t) => {
                t.onMutationUpdate(e);
              }),
                this.#y.notify({ mutation: this, type: "updated", action: e }));
            }));
        }
      },
      H = class extends T {
        constructor(e = {}) {
          (super(), (this.config = e), (this.#g = new Set()), (this.#b = new Map()), (this.#w = 0));
        }
        #g;
        #b;
        #w;
        build(e, t, i) {
          let s = new Q({
            client: e,
            mutationCache: this,
            mutationId: ++this.#w,
            options: e.defaultMutationOptions(t),
            state: i,
          });
          return (this.add(s), s);
        }
        add(e) {
          this.#g.add(e);
          let t = U(e);
          if ("string" == typeof t) {
            let i = this.#b.get(t);
            i ? i.push(e) : this.#b.set(t, [e]);
          }
          this.notify({ type: "added", mutation: e });
        }
        remove(e) {
          if (this.#g.delete(e)) {
            let t = U(e);
            if ("string" == typeof t) {
              let i = this.#b.get(t);
              if (i)
                if (i.length > 1) {
                  let t = i.indexOf(e);
                  -1 !== t && i.splice(t, 1);
                } else i[0] === e && this.#b.delete(t);
            }
          }
          this.notify({ type: "removed", mutation: e });
        }
        canRun(e) {
          let t = U(e);
          if ("string" != typeof t) return !0;
          {
            let i = this.#b.get(t),
              s = i?.find((e) => "pending" === e.state.status);
            return !s || s === e;
          }
        }
        runNext(e) {
          let t = U(e);
          if ("string" != typeof t) return Promise.resolve();
          {
            let i = this.#b.get(t)?.find((t) => t !== e && t.state.isPaused);
            return i?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          S.batch(() => {
            (this.#g.forEach((e) => {
              this.notify({ type: "removed", mutation: e });
            }),
              this.#g.clear(),
              this.#b.clear());
          });
        }
        getAll() {
          return Array.from(this.#g);
        }
        find(e) {
          let t = { exact: !0, ...e };
          return this.getAll().find((e) => v(t, e));
        }
        findAll(e = {}) {
          return this.getAll().filter((t) => v(e, t));
        }
        notify(e) {
          S.batch(() => {
            this.listeners.forEach((t) => {
              t(e);
            });
          });
        }
        resumePausedMutations() {
          let e = this.getAll().filter((e) => e.state.isPaused);
          return S.batch(() => Promise.all(e.map((e) => e.continue().catch(d))));
        }
      };
    function U(e) {
      return e.options.scope?.id;
    }
    function _(e) {
      return {
        onFetch: (t, i) => {
          let s = t.options,
            r = t.fetchOptions?.meta?.fetchMore?.direction,
            n = t.state.data?.pages || [],
            a = t.state.data?.pageParams || [],
            o = { pages: [], pageParams: [] },
            u = 0,
            l = async () => {
              let i = !1,
                l = R(t.options, t.fetchOptions),
                c = async (e, s, r) => {
                  let n;
                  if (i) return Promise.reject();
                  if (null == s && e.pages.length) return Promise.resolve(e);
                  let a =
                      (Object.defineProperty(
                        (n = {
                          client: t.client,
                          queryKey: t.queryKey,
                          pageParam: s,
                          direction: r ? "backward" : "forward",
                          meta: t.options.meta,
                        }),
                        "signal",
                        {
                          enumerable: !0,
                          get: () => (
                            t.signal.aborted
                              ? (i = !0)
                              : t.signal.addEventListener("abort", () => {
                                  i = !0;
                                }),
                            t.signal
                          ),
                        },
                      ),
                      n),
                    o = await l(a),
                    { maxPages: u } = t.options,
                    c = r ? x : P;
                  return { pages: c(e.pages, o, u), pageParams: c(e.pageParams, s, u) };
                };
              if (r && n.length) {
                let e = "backward" === r,
                  t = { pages: n, pageParams: a },
                  i = (
                    e
                      ? function (e, { pages: t, pageParams: i }) {
                          return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, i[0], i) : void 0;
                        }
                      : G
                  )(s, t);
                o = await c(t, i, e);
              } else {
                let t = e ?? n.length;
                do {
                  let e = 0 === u ? (a[0] ?? s.initialPageParam) : G(s, o);
                  if (u > 0 && null == e) break;
                  ((o = await c(o, e)), u++);
                } while (u < t);
              }
              return o;
            };
          t.options.persister
            ? (t.fetchFn = () =>
                t.options.persister?.(
                  l,
                  { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                  i,
                ))
            : (t.fetchFn = l);
        },
      };
    }
    function G(e, { pages: t, pageParams: i }) {
      let s = t.length - 1;
      return t.length > 0 ? e.getNextPageParam(t[s], t, i[s], i) : void 0;
    }
    var V = class {
        #C;
        #y;
        #d;
        #E;
        #P;
        #x;
        #O;
        #R;
        constructor(e = {}) {
          ((this.#C = e.queryCache || new K()),
            (this.#y = e.mutationCache || new H()),
            (this.#d = e.defaultOptions || {}),
            (this.#E = new Map()),
            (this.#P = new Map()),
            (this.#x = 0));
        }
        mount() {
          (this.#x++,
            1 === this.#x &&
              ((this.#O = M.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#C.onFocus());
              })),
              (this.#R = q.subscribe(async (e) => {
                e && (await this.resumePausedMutations(), this.#C.onOnline());
              }))));
        }
        unmount() {
          (this.#x--, 0 === this.#x && (this.#O?.(), (this.#O = void 0), this.#R?.(), (this.#R = void 0)));
        }
        isFetching(e) {
          return this.#C.findAll({ ...e, fetchStatus: "fetching" }).length;
        }
        isMutating(e) {
          return this.#y.findAll({ ...e, status: "pending" }).length;
        }
        getQueryData(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#C.get(t.queryHash)?.state.data;
        }
        ensureQueryData(e) {
          let t = this.defaultQueryOptions(e),
            i = this.#C.build(this, t),
            s = i.state.data;
          return void 0 === s
            ? this.fetchQuery(e)
            : (e.revalidateIfStale && i.isStaleByTime(f(t.staleTime, i)) && this.prefetchQuery(t), Promise.resolve(s));
        }
        getQueriesData(e) {
          return this.#C.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
        }
        setQueryData(e, t, i) {
          let s = this.defaultQueryOptions({ queryKey: e }),
            r = this.#C.get(s.queryHash),
            n = r?.state.data,
            a = "function" == typeof t ? t(n) : t;
          if (void 0 !== a) return this.#C.build(this, s).setData(a, { ...i, manual: !0 });
        }
        setQueriesData(e, t, i) {
          return S.batch(() => this.#C.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, i)]));
        }
        getQueryState(e) {
          let t = this.defaultQueryOptions({ queryKey: e });
          return this.#C.get(t.queryHash)?.state;
        }
        removeQueries(e) {
          let t = this.#C;
          S.batch(() => {
            t.findAll(e).forEach((e) => {
              t.remove(e);
            });
          });
        }
        resetQueries(e, t) {
          let i = this.#C;
          return S.batch(
            () => (
              i.findAll(e).forEach((e) => {
                e.reset();
              }),
              this.refetchQueries({ type: "active", ...e }, t)
            ),
          );
        }
        cancelQueries(e, t = {}) {
          let i = { revert: !0, ...t };
          return Promise.all(S.batch(() => this.#C.findAll(e).map((e) => e.cancel(i))))
            .then(d)
            .catch(d);
        }
        invalidateQueries(e, t = {}) {
          return S.batch(() =>
            (this.#C.findAll(e).forEach((e) => {
              e.invalidate();
            }),
            e?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? "active" }, t),
          );
        }
        refetchQueries(e, t = {}) {
          let i = { ...t, cancelRefetch: t.cancelRefetch ?? !0 };
          return Promise.all(
            S.batch(() =>
              this.#C
                .findAll(e)
                .filter((e) => !e.isDisabled() && !e.isStatic())
                .map((e) => {
                  let t = e.fetch(void 0, i);
                  return (i.throwOnError || (t = t.catch(d)), "paused" === e.state.fetchStatus ? Promise.resolve() : t);
                }),
            ),
          ).then(d);
        }
        fetchQuery(e) {
          let t = this.defaultQueryOptions(e);
          void 0 === t.retry && (t.retry = !1);
          let i = this.#C.build(this, t);
          return i.isStaleByTime(f(t.staleTime, i)) ? i.fetch(t) : Promise.resolve(i.state.data);
        }
        prefetchQuery(e) {
          return this.fetchQuery(e).then(d).catch(d);
        }
        fetchInfiniteQuery(e) {
          return ((e.behavior = _(e.pages)), this.fetchQuery(e));
        }
        prefetchInfiniteQuery(e) {
          return this.fetchInfiniteQuery(e).then(d).catch(d);
        }
        ensureInfiniteQueryData(e) {
          return ((e.behavior = _(e.pages)), this.ensureQueryData(e));
        }
        resumePausedMutations() {
          return q.isOnline() ? this.#y.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#C;
        }
        getMutationCache() {
          return this.#y;
        }
        getDefaultOptions() {
          return this.#d;
        }
        setDefaultOptions(e) {
          this.#d = e;
        }
        setQueryDefaults(e, t) {
          this.#E.set(y(e), { queryKey: e, defaultOptions: t });
        }
        getQueryDefaults(e) {
          let t = [...this.#E.values()],
            i = {};
          return (
            t.forEach((t) => {
              g(e, t.queryKey) && Object.assign(i, t.defaultOptions);
            }),
            i
          );
        }
        setMutationDefaults(e, t) {
          this.#P.set(y(e), { mutationKey: e, defaultOptions: t });
        }
        getMutationDefaults(e) {
          let t = [...this.#P.values()],
            i = {};
          return (
            t.forEach((t) => {
              g(e, t.mutationKey) && Object.assign(i, t.defaultOptions);
            }),
            i
          );
        }
        defaultQueryOptions(e) {
          if (e._defaulted) return e;
          let t = { ...this.#d.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
          return (
            t.queryHash || (t.queryHash = m(t.queryKey, t)),
            void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode),
            void 0 === t.throwOnError && (t.throwOnError = !!t.suspense),
            !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
            t.queryFn === O && (t.enabled = !1),
            t
          );
        }
        defaultMutationOptions(e) {
          return e?._defaulted
            ? e
            : {
                ...this.#d.mutations,
                ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
                ...e,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#C.clear(), this.#y.clear());
        }
      },
      $ = e.i(770572),
      z = $.createContext(void 0),
      B = ({ client: e, children: t }) => (
        $.useEffect(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e],
        ),
        (0, u.jsx)(z.Provider, { value: e, children: t })
      );
    function W(e) {
      let { children: t } = e,
        i = (o || (o = new V({ defaultOptions: { queries: { staleTime: 6e4 } } })), o);
      return (0, u.jsx)(B, { client: i, children: t });
    }
    e.s(["Providers", () => W], 306866);
  },
  929051,
  (e) => {
    "use strict";
    var t = e.i(802252),
      i = e.i(537023),
      s = e.i(393513),
      r = e.i(105585),
      n = e.i(770572);
    (e.i(210512), e.i(930943));
    e.i(261992);
    var a = e.i(299846),
      o = e.i(614840),
      u = e.i(205020),
      l = e.i(462406),
      c = e.i(940188),
      h = e.i(696731),
      d = e.i(164265),
      f = e.i(740665),
      p = e.i(763743),
      v = e.i(286002),
      m = e.i(210138),
      y = e.i(408200),
      g = e.i(319256),
      b = e.i(296915),
      w = e.i(766411),
      C = e.i(398849),
      E = "NavigationMenu",
      [P, x, O] = (0, m.createCollection)(E),
      [R, S, T] = (0, m.createCollection)(E),
      [M, q] = (0, u.createContextScope)(E, [O, T]),
      [F, D] = M(E),
      [j, A] = M(E);
    n.forwardRef((e, i) => {
      let {
          __scopeNavigationMenu: s,
          value: r,
          onValueChange: a,
          defaultValue: o,
          delayDuration: u = 200,
          skipDelayDuration: l = 300,
          orientation: p = "horizontal",
          dir: v,
          ...m
        } = e,
        [y, g] = n.useState(null),
        b = (0, d.useComposedRefs)(i, (e) => g(e)),
        w = (0, f.useDirection)(v),
        C = n.useRef(0),
        P = n.useRef(0),
        x = n.useRef(0),
        [O, R] = n.useState(!0),
        [S, T] = (0, h.useControllableState)({
          prop: r,
          onChange: (e) => {
            let t = l > 0;
            ("" !== e
              ? (window.clearTimeout(x.current), t && R(!1))
              : (window.clearTimeout(x.current), (x.current = window.setTimeout(() => R(!0), l))),
              a?.(e));
          },
          defaultProp: o ?? "",
          caller: E,
        }),
        M = n.useCallback(() => {
          (window.clearTimeout(P.current), (P.current = window.setTimeout(() => T(""), 150)));
        }, [T]),
        q = n.useCallback(
          (e) => {
            (window.clearTimeout(P.current), T(e));
          },
          [T],
        ),
        F = n.useCallback(
          (e) => {
            S === e
              ? window.clearTimeout(P.current)
              : (C.current = window.setTimeout(() => {
                  (window.clearTimeout(P.current), T(e));
                }, u));
          },
          [S, T, u],
        );
      return (
        n.useEffect(
          () => () => {
            (window.clearTimeout(C.current), window.clearTimeout(P.current), window.clearTimeout(x.current));
          },
          [],
        ),
        (0, t.jsx)(I, {
          scope: s,
          isRootMenu: !0,
          value: S,
          dir: w,
          orientation: p,
          rootNavigationMenu: y,
          onTriggerEnter: (e) => {
            (window.clearTimeout(C.current), O ? F(e) : q(e));
          },
          onTriggerLeave: () => {
            (window.clearTimeout(C.current), M());
          },
          onContentEnter: () => window.clearTimeout(P.current),
          onContentLeave: M,
          onItemSelect: (e) => {
            T((t) => (t === e ? "" : e));
          },
          onItemDismiss: () => T(""),
          children: (0, t.jsx)(c.Primitive.nav, { "aria-label": "Main", "data-orientation": p, dir: w, ...m, ref: b }),
        })
      );
    }).displayName = E;
    var k = "NavigationMenuSub";
    n.forwardRef((e, i) => {
      let {
          __scopeNavigationMenu: s,
          value: r,
          onValueChange: n,
          defaultValue: a,
          orientation: o = "horizontal",
          ...u
        } = e,
        l = D(k, s),
        [d, f] = (0, h.useControllableState)({ prop: r, onChange: n, defaultProp: a ?? "", caller: k });
      return (0, t.jsx)(I, {
        scope: s,
        isRootMenu: !1,
        value: d,
        dir: l.dir,
        orientation: o,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (e) => f(e),
        onItemSelect: (e) => f(e),
        onItemDismiss: () => f(""),
        children: (0, t.jsx)(c.Primitive.div, { "data-orientation": o, ...u, ref: i }),
      });
    }).displayName = k;
    var I = (e) => {
        let {
            scope: i,
            isRootMenu: s,
            rootNavigationMenu: r,
            dir: a,
            orientation: o,
            children: u,
            value: l,
            onItemSelect: c,
            onItemDismiss: h,
            onTriggerEnter: d,
            onTriggerLeave: f,
            onContentEnter: p,
            onContentLeave: m,
          } = e,
          [y, b] = n.useState(null),
          [C, E] = n.useState(new Map()),
          [x, O] = n.useState(null);
        return (0, t.jsx)(F, {
          scope: i,
          isRootMenu: s,
          rootNavigationMenu: r,
          value: l,
          previousValue: (0, g.usePrevious)(l),
          baseId: (0, v.useId)(),
          dir: a,
          orientation: o,
          viewport: y,
          onViewportChange: b,
          indicatorTrack: x,
          onIndicatorTrackChange: O,
          onTriggerEnter: (0, w.useCallbackRef)(d),
          onTriggerLeave: (0, w.useCallbackRef)(f),
          onContentEnter: (0, w.useCallbackRef)(p),
          onContentLeave: (0, w.useCallbackRef)(m),
          onItemSelect: (0, w.useCallbackRef)(c),
          onItemDismiss: (0, w.useCallbackRef)(h),
          onViewportContentChange: n.useCallback((e, t) => {
            E((i) => (i.set(e, t), new Map(i)));
          }, []),
          onViewportContentRemove: n.useCallback((e) => {
            E((t) => (t.has(e) ? (t.delete(e), new Map(t)) : t));
          }, []),
          children: (0, t.jsx)(P.Provider, { scope: i, children: (0, t.jsx)(j, { scope: i, items: C, children: u }) }),
        });
      },
      L = "NavigationMenuList";
    n.forwardRef((e, i) => {
      let { __scopeNavigationMenu: s, ...r } = e,
        n = D(L, s),
        a = (0, t.jsx)(c.Primitive.ul, { "data-orientation": n.orientation, ...r, ref: i });
      return (0, t.jsx)(c.Primitive.div, {
        style: { position: "relative" },
        ref: n.onIndicatorTrackChange,
        children: (0, t.jsx)(P.Slot, {
          scope: s,
          children: n.isRootMenu ? (0, t.jsx)(Z, { asChild: !0, children: a }) : a,
        }),
      });
    }).displayName = L;
    var N = "NavigationMenuItem",
      [K, Q] = M(N),
      H = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, value: r, ...a } = e,
          o = (0, v.useId)(),
          u = n.useRef(null),
          l = n.useRef(null),
          h = n.useRef(null),
          d = n.useRef(() => {}),
          f = n.useRef(!1),
          p = n.useCallback((e = "start") => {
            if (u.current) {
              d.current();
              let t = ei(u.current);
              t.length && es("start" === e ? t : t.reverse());
            }
          }, []),
          m = n.useCallback(() => {
            if (u.current) {
              var e;
              let t = ei(u.current);
              t.length &&
                ((e = t).forEach((e) => {
                  ((e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1"));
                }),
                (d.current = () => {
                  e.forEach((e) => {
                    let t = e.dataset.tabindex;
                    e.setAttribute("tabindex", t);
                  });
                }));
            }
          }, []);
        return (0, t.jsx)(K, {
          scope: s,
          value: r || o || "LEGACY_REACT_AUTO_VALUE",
          triggerRef: l,
          contentRef: u,
          focusProxyRef: h,
          wasEscapeCloseRef: f,
          onEntryKeyDown: p,
          onFocusProxyEnter: p,
          onRootContentClose: m,
          onContentFocusOutside: m,
          children: (0, t.jsx)(c.Primitive.li, { ...a, ref: i }),
        });
      });
    H.displayName = N;
    var U = "NavigationMenuTrigger";
    n.forwardRef((e, i) => {
      let { __scopeNavigationMenu: s, disabled: r, ...a } = e,
        o = D(U, e.__scopeNavigationMenu),
        u = Q(U, e.__scopeNavigationMenu),
        h = n.useRef(null),
        f = (0, d.useComposedRefs)(h, u.triggerRef, i),
        p = ea(o.baseId, u.value),
        v = eo(o.baseId, u.value),
        m = n.useRef(!1),
        y = n.useRef(!1),
        g = u.value === o.value;
      return (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)(P.ItemSlot, {
            scope: s,
            value: u.value,
            children: (0, t.jsx)(et, {
              asChild: !0,
              children: (0, t.jsx)(c.Primitive.button, {
                id: p,
                disabled: r,
                "data-disabled": r ? "" : void 0,
                "data-state": en(g),
                "aria-expanded": g,
                "aria-controls": v,
                ...a,
                ref: f,
                onPointerEnter: (0, l.composeEventHandlers)(e.onPointerEnter, () => {
                  ((y.current = !1), (u.wasEscapeCloseRef.current = !1));
                }),
                onPointerMove: (0, l.composeEventHandlers)(
                  e.onPointerMove,
                  eu(() => {
                    r ||
                      y.current ||
                      u.wasEscapeCloseRef.current ||
                      m.current ||
                      (o.onTriggerEnter(u.value), (m.current = !0));
                  }),
                ),
                onPointerLeave: (0, l.composeEventHandlers)(
                  e.onPointerLeave,
                  eu(() => {
                    r || (o.onTriggerLeave(), (m.current = !1));
                  }),
                ),
                onClick: (0, l.composeEventHandlers)(e.onClick, () => {
                  (o.onItemSelect(u.value), (y.current = g));
                }),
                onKeyDown: (0, l.composeEventHandlers)(e.onKeyDown, (e) => {
                  let t = { horizontal: "ArrowDown", vertical: "rtl" === o.dir ? "ArrowLeft" : "ArrowRight" }[
                    o.orientation
                  ];
                  g && e.key === t && (u.onEntryKeyDown(), e.preventDefault());
                }),
              }),
            }),
          }),
          g &&
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(C.Root, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: u.focusProxyRef,
                  onFocus: (e) => {
                    let t = u.contentRef.current,
                      i = e.relatedTarget,
                      s = i === h.current,
                      r = t?.contains(i);
                    (s || !r) && u.onFocusProxyEnter(s ? "start" : "end");
                  },
                }),
                o.viewport && (0, t.jsx)("span", { "aria-owns": v }),
              ],
            }),
        ],
      });
    }).displayName = U;
    var _ = "navigationMenu.linkSelect",
      G = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, active: r, onSelect: n, ...a } = e;
        return (0, t.jsx)(et, {
          asChild: !0,
          children: (0, t.jsx)(c.Primitive.a, {
            "data-active": r ? "" : void 0,
            "aria-current": r ? "page" : void 0,
            ...a,
            ref: i,
            onClick: (0, l.composeEventHandlers)(
              e.onClick,
              (e) => {
                let t = e.target,
                  i = new CustomEvent(_, { bubbles: !0, cancelable: !0 });
                if (
                  (t.addEventListener(_, (e) => n?.(e), { once: !0 }),
                  (0, c.dispatchDiscreteCustomEvent)(t, i),
                  !i.defaultPrevented && !e.metaKey)
                ) {
                  let e = new CustomEvent(W, { bubbles: !0, cancelable: !0 });
                  (0, c.dispatchDiscreteCustomEvent)(t, e);
                }
              },
              { checkForDefaultPrevented: !1 },
            ),
          }),
        });
      });
    G.displayName = "NavigationMenuLink";
    var V = "NavigationMenuIndicator";
    n.forwardRef((e, i) => {
      let { forceMount: s, ...r } = e,
        n = D(V, e.__scopeNavigationMenu),
        a = !!n.value;
      return n.indicatorTrack
        ? o.default.createPortal(
            (0, t.jsx)(p.Presence, { present: s || a, children: (0, t.jsx)($, { ...r, ref: i }) }),
            n.indicatorTrack,
          )
        : null;
    }).displayName = V;
    var $ = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, ...r } = e,
          a = D(V, s),
          o = x(s),
          [u, l] = n.useState(null),
          [h, d] = n.useState(null),
          f = "horizontal" === a.orientation,
          p = !!a.value;
        n.useEffect(() => {
          let e = o(),
            t = e.find((e) => e.value === a.value)?.ref.current;
          t && l(t);
        }, [o, a.value]);
        let v = () => {
          u && d({ size: f ? u.offsetWidth : u.offsetHeight, offset: f ? u.offsetLeft : u.offsetTop });
        };
        return (
          er(u, v),
          er(a.indicatorTrack, v),
          h
            ? (0, t.jsx)(c.Primitive.div, {
                "aria-hidden": !0,
                "data-state": p ? "visible" : "hidden",
                "data-orientation": a.orientation,
                ...r,
                ref: i,
                style: {
                  position: "absolute",
                  ...(f
                    ? { left: 0, width: h.size + "px", transform: `translateX(${h.offset}px)` }
                    : { top: 0, height: h.size + "px", transform: `translateY(${h.offset}px)` }),
                  ...r.style,
                },
              })
            : null
        );
      }),
      z = "NavigationMenuContent";
    n.forwardRef((e, i) => {
      let { forceMount: s, ...r } = e,
        n = D(z, e.__scopeNavigationMenu),
        a = Q(z, e.__scopeNavigationMenu),
        o = (0, d.useComposedRefs)(a.contentRef, i),
        u = a.value === n.value,
        c = {
          value: a.value,
          triggerRef: a.triggerRef,
          focusProxyRef: a.focusProxyRef,
          wasEscapeCloseRef: a.wasEscapeCloseRef,
          onContentFocusOutside: a.onContentFocusOutside,
          onRootContentClose: a.onRootContentClose,
          ...r,
        };
      return n.viewport
        ? (0, t.jsx)(B, { forceMount: s, ...c, ref: o })
        : (0, t.jsx)(p.Presence, {
            present: s || u,
            children: (0, t.jsx)(J, {
              "data-state": en(u),
              ...c,
              ref: o,
              onPointerEnter: (0, l.composeEventHandlers)(e.onPointerEnter, n.onContentEnter),
              onPointerLeave: (0, l.composeEventHandlers)(e.onPointerLeave, eu(n.onContentLeave)),
              style: { pointerEvents: !u && n.isRootMenu ? "none" : void 0, ...c.style },
            }),
          });
    }).displayName = z;
    var B = n.forwardRef((e, t) => {
        let { onViewportContentChange: i, onViewportContentRemove: s } = D(z, e.__scopeNavigationMenu);
        return (
          (0, b.useLayoutEffect)(() => {
            i(e.value, { ref: t, ...e });
          }, [e, t, i]),
          (0, b.useLayoutEffect)(() => () => s(e.value), [e.value, s]),
          null
        );
      }),
      W = "navigationMenu.rootContentDismiss",
      J = n.forwardRef((e, i) => {
        let {
            __scopeNavigationMenu: s,
            value: r,
            triggerRef: a,
            focusProxyRef: o,
            wasEscapeCloseRef: u,
            onRootContentClose: c,
            onContentFocusOutside: h,
            ...f
          } = e,
          p = D(z, s),
          v = n.useRef(null),
          m = (0, d.useComposedRefs)(v, i),
          g = ea(p.baseId, r),
          b = eo(p.baseId, r),
          w = x(s),
          C = n.useRef(null),
          { onItemDismiss: E } = p;
        n.useEffect(() => {
          let e = v.current;
          if (p.isRootMenu && e) {
            let t = () => {
              (E(), c(), e.contains(document.activeElement) && a.current?.focus());
            };
            return (e.addEventListener(W, t), () => e.removeEventListener(W, t));
          }
        }, [p.isRootMenu, e.value, a, E, c]);
        let P = n.useMemo(() => {
          let e = w().map((e) => e.value);
          "rtl" === p.dir && e.reverse();
          let t = e.indexOf(p.value),
            i = e.indexOf(p.previousValue),
            s = r === p.value,
            n = i === e.indexOf(r);
          if (!s && !n) return C.current;
          let a = (() => {
            if (t !== i) {
              if (s && -1 !== i) return t > i ? "from-end" : "from-start";
              if (n && -1 !== t) return t > i ? "to-start" : "to-end";
            }
            return null;
          })();
          return ((C.current = a), a);
        }, [p.previousValue, p.value, p.dir, w, r]);
        return (0, t.jsx)(Z, {
          asChild: !0,
          children: (0, t.jsx)(y.DismissableLayer, {
            id: b,
            "aria-labelledby": g,
            "data-motion": P,
            "data-orientation": p.orientation,
            ...f,
            ref: m,
            disableOutsidePointerEvents: !1,
            onDismiss: () => {
              let e = new Event(W, { bubbles: !0, cancelable: !0 });
              v.current?.dispatchEvent(e);
            },
            onFocusOutside: (0, l.composeEventHandlers)(e.onFocusOutside, (e) => {
              h();
              let t = e.target;
              p.rootNavigationMenu?.contains(t) && e.preventDefault();
            }),
            onPointerDownOutside: (0, l.composeEventHandlers)(e.onPointerDownOutside, (e) => {
              let t = e.target,
                i = w().some((e) => e.ref.current?.contains(t)),
                s = p.isRootMenu && p.viewport?.contains(t);
              (i || s || !p.isRootMenu) && e.preventDefault();
            }),
            onKeyDown: (0, l.composeEventHandlers)(e.onKeyDown, (e) => {
              let t = e.altKey || e.ctrlKey || e.metaKey;
              if ("Tab" === e.key && !t) {
                let t = ei(e.currentTarget),
                  i = document.activeElement,
                  s = t.findIndex((e) => e === i);
                es(e.shiftKey ? t.slice(0, s).reverse() : t.slice(s + 1, t.length))
                  ? e.preventDefault()
                  : o.current?.focus();
              }
            }),
            onEscapeKeyDown: (0, l.composeEventHandlers)(e.onEscapeKeyDown, (e) => {
              u.current = !0;
            }),
          }),
        });
      }),
      Y = "NavigationMenuViewport";
    n.forwardRef((e, i) => {
      let { forceMount: s, ...r } = e,
        n = !!D(Y, e.__scopeNavigationMenu).value;
      return (0, t.jsx)(p.Presence, { present: s || n, children: (0, t.jsx)(X, { ...r, ref: i }) });
    }).displayName = Y;
    var X = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, children: r, ...a } = e,
          o = D(Y, s),
          u = (0, d.useComposedRefs)(i, o.onViewportChange),
          h = A(z, e.__scopeNavigationMenu),
          [f, v] = n.useState(null),
          [m, y] = n.useState(null),
          g = f ? f?.width + "px" : void 0,
          b = f ? f?.height + "px" : void 0,
          w = !!o.value,
          C = w ? o.value : o.previousValue;
        return (
          er(m, () => {
            m && v({ width: m.offsetWidth, height: m.offsetHeight });
          }),
          (0, t.jsx)(c.Primitive.div, {
            "data-state": en(w),
            "data-orientation": o.orientation,
            ...a,
            ref: u,
            style: {
              pointerEvents: !w && o.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": g,
              "--radix-navigation-menu-viewport-height": b,
              ...a.style,
            },
            onPointerEnter: (0, l.composeEventHandlers)(e.onPointerEnter, o.onContentEnter),
            onPointerLeave: (0, l.composeEventHandlers)(e.onPointerLeave, eu(o.onContentLeave)),
            children: Array.from(h.items).map(([e, { ref: i, forceMount: s, ...r }]) => {
              let n = C === e;
              return (0, t.jsx)(
                p.Presence,
                {
                  present: s || n,
                  children: (0, t.jsx)(J, {
                    ...r,
                    ref: (0, d.composeRefs)(i, (e) => {
                      n && e && y(e);
                    }),
                  }),
                },
                e,
              );
            }),
          })
        );
      }),
      Z = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, ...r } = e,
          n = D("FocusGroup", s);
        return (0, t.jsx)(R.Provider, {
          scope: s,
          children: (0, t.jsx)(R.Slot, {
            scope: s,
            children: (0, t.jsx)(c.Primitive.div, { dir: n.dir, ...r, ref: i }),
          }),
        });
      }),
      ee = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
      et = n.forwardRef((e, i) => {
        let { __scopeNavigationMenu: s, ...r } = e,
          n = S(s),
          a = D("FocusGroupItem", s);
        return (0, t.jsx)(R.ItemSlot, {
          scope: s,
          children: (0, t.jsx)(c.Primitive.button, {
            ...r,
            ref: i,
            onKeyDown: (0, l.composeEventHandlers)(e.onKeyDown, (e) => {
              if (["Home", "End", ...ee].includes(e.key)) {
                let t = n().map((e) => e.ref.current);
                if (
                  (["rtl" === a.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(),
                  ee.includes(e.key))
                ) {
                  let i = t.indexOf(e.currentTarget);
                  t = t.slice(i + 1);
                }
                (setTimeout(() => es(t)), e.preventDefault());
              }
            }),
          }),
        });
      });
    function ei(e) {
      let t = [],
        i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (e) => {
            let t = "INPUT" === e.tagName && "hidden" === e.type;
            return e.disabled || e.hidden || t
              ? NodeFilter.FILTER_SKIP
              : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; i.nextNode(); ) t.push(i.currentNode);
      return t;
    }
    function es(e) {
      let t = document.activeElement;
      return e.some((e) => e === t || (e.focus(), document.activeElement !== t));
    }
    function er(e, t) {
      let i = (0, w.useCallbackRef)(t);
      (0, b.useLayoutEffect)(() => {
        let t = 0;
        if (e) {
          let s = new ResizeObserver(() => {
            (cancelAnimationFrame(t), (t = window.requestAnimationFrame(i)));
          });
          return (
            s.observe(e),
            () => {
              (window.cancelAnimationFrame(t), s.unobserve(e));
            }
          );
        }
      }, [e, i]);
    }
    function en(e) {
      return e ? "open" : "closed";
    }
    function ea(e, t) {
      return `${e}-trigger-${t}`;
    }
    function eo(e, t) {
      return `${e}-content-${t}`;
    }
    function eu(e) {
      return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
    }
    (e.i(266356), e.i(884634));
    let el = Error("Cannot find module '@/lib/utils'");
    throw ((el.code = "MODULE_NOT_FOUND"), el);
  },
  230400,
  (e) => {
    "use strict";
    var t = e.i(802252),
      i = e.i(770572),
      s = (e, t, i, s, r, n, a, o) => {
        let u = document.documentElement,
          l = ["light", "dark"];
        function c(t) {
          var i;
          ((Array.isArray(e) ? e : [e]).forEach((e) => {
            let i = "class" === e,
              s = i && n ? r.map((e) => n[e] || e) : r;
            i ? (u.classList.remove(...s), u.classList.add(n && n[t] ? n[t] : t)) : u.setAttribute(e, t);
          }),
            (i = t),
            o && l.includes(i) && (u.style.colorScheme = i));
        }
        if (s) c(s);
        else
          try {
            let e = localStorage.getItem(t) || i,
              s =
                a && "system" === e
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
                  : e;
            c(s);
          } catch (e) {}
      },
      r = i.createContext(void 0),
      n = { setTheme: (e) => {}, themes: [] };
    i.memo(
      ({
        forcedTheme: e,
        storageKey: t,
        attribute: r,
        enableSystem: n,
        enableColorScheme: a,
        defaultTheme: o,
        value: u,
        themes: l,
        nonce: c,
        scriptProps: h,
      }) => {
        let d = JSON.stringify([r, t, o, e, l, u, n, a]).slice(1, -1);
        return i.createElement("script", {
          ...h,
          suppressHydrationWarning: !0,
          nonce: "undefined" == typeof window ? c : "",
          dangerouslySetInnerHTML: { __html: `(${s.toString()})(${d})` },
        });
      },
    );
    var a = e.i(624244);
    let o = ({ ...e }) => {
      var s;
      let { theme: o = "system" } = null != (s = i.useContext(r)) ? s : n;
      return (0, t.jsx)(a.Toaster, {
        theme: o,
        className: "toaster group",
        toastOptions: {
          classNames: {
            toast:
              "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",
            description: "group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",
            actionButton:
              "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",
            cancelButton:
              "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400",
          },
        },
        ...e,
      });
    };
    e.s(["Toaster", () => o], 230400);
  },
]);
