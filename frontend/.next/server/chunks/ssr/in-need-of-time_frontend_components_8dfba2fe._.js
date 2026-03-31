module.exports = [
  37068,
  (a) => {
    "use strict";
    let b, c, d, e, f, g;
    var h = a.i(13795),
      i = {
        setTimeout: (a, b) => setTimeout(a, b),
        clearTimeout: (a) => clearTimeout(a),
        setInterval: (a, b) => setInterval(a, b),
        clearInterval: (a) => clearInterval(a),
      },
      j = new (class {
        #a = i;
        #b = !1;
        setTimeoutProvider(a) {
          this.#a = a;
        }
        setTimeout(a, b) {
          return this.#a.setTimeout(a, b);
        }
        clearTimeout(a) {
          this.#a.clearTimeout(a);
        }
        setInterval(a, b) {
          return this.#a.setInterval(a, b);
        }
        clearInterval(a) {
          this.#a.clearInterval(a);
        }
      })();
    function k() {}
    function l(a, b) {
      return "function" == typeof a ? a(b) : a;
    }
    function m(a, b) {
      let { type: c = "all", exact: d, fetchStatus: e, predicate: f, queryKey: g, stale: h } = a;
      if (g) {
        if (d) {
          if (b.queryHash !== o(g, b.options)) return !1;
        } else if (!q(b.queryKey, g)) return !1;
      }
      if ("all" !== c) {
        let a = b.isActive();
        if (("active" === c && !a) || ("inactive" === c && a)) return !1;
      }
      return ("boolean" != typeof h || b.isStale() === h) && (!e || e === b.state.fetchStatus) && (!f || !!f(b));
    }
    function n(a, b) {
      let { exact: c, status: d, predicate: e, mutationKey: f } = a;
      if (f) {
        if (!b.options.mutationKey) return !1;
        if (c) {
          if (p(b.options.mutationKey) !== p(f)) return !1;
        } else if (!q(b.options.mutationKey, f)) return !1;
      }
      return (!d || b.state.status === d) && (!e || !!e(b));
    }
    function o(a, b) {
      return (b?.queryKeyHashFn || p)(a);
    }
    function p(a) {
      return JSON.stringify(a, (a, b) =>
        t(b)
          ? Object.keys(b)
              .sort()
              .reduce((a, c) => ((a[c] = b[c]), a), {})
          : b,
      );
    }
    function q(a, b) {
      return (
        a === b ||
        (typeof a == typeof b &&
          !!a &&
          !!b &&
          "object" == typeof a &&
          "object" == typeof b &&
          Object.keys(b).every((c) => q(a[c], b[c])))
      );
    }
    var r = Object.prototype.hasOwnProperty;
    function s(a) {
      return Array.isArray(a) && a.length === Object.keys(a).length;
    }
    function t(a) {
      if (!u(a)) return !1;
      let b = a.constructor;
      if (void 0 === b) return !0;
      let c = b.prototype;
      return !!u(c) && !!c.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(a) === Object.prototype;
    }
    function u(a) {
      return "[object Object]" === Object.prototype.toString.call(a);
    }
    function v(a, b, c = 0) {
      let d = [...a, b];
      return c && d.length > c ? d.slice(1) : d;
    }
    function w(a, b, c = 0) {
      let d = [b, ...a];
      return c && d.length > c ? d.slice(0, -1) : d;
    }
    var x = Symbol();
    function y(a, b) {
      return !a.queryFn && b?.initialPromise
        ? () => b.initialPromise
        : a.queryFn && a.queryFn !== x
          ? a.queryFn
          : () => Promise.reject(Error(`Missing queryFn: '${a.queryHash}'`));
    }
    var z =
        ((b = []),
        (c = 0),
        (d = (a) => {
          a();
        }),
        (e = (a) => {
          a();
        }),
        (f = function (a) {
          setTimeout(a, 0);
        }),
        {
          batch: (a) => {
            let g;
            c++;
            try {
              g = a();
            } finally {
              let a;
              --c ||
                ((a = b),
                (b = []),
                a.length &&
                  f(() => {
                    e(() => {
                      a.forEach((a) => {
                        d(a);
                      });
                    });
                  }));
            }
            return g;
          },
          batchCalls:
            (a) =>
            (...b) => {
              g(() => {
                a(...b);
              });
            },
          schedule: (g = (a) => {
            c
              ? b.push(a)
              : f(() => {
                  d(a);
                });
          }),
          setNotifyFunction: (a) => {
            d = a;
          },
          setBatchNotifyFunction: (a) => {
            e = a;
          },
          setScheduler: (a) => {
            f = a;
          },
        }),
      A = class {
        constructor() {
          ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
        }
        subscribe(a) {
          return (
            this.listeners.add(a),
            this.onSubscribe(),
            () => {
              (this.listeners.delete(a), this.onUnsubscribe());
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      },
      B = new (class extends A {
        #c;
        #d;
        #e;
        constructor() {
          (super(), (this.#e = (a) => {}));
        }
        onSubscribe() {
          this.#d || this.setEventListener(this.#e);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#d?.(), (this.#d = void 0));
        }
        setEventListener(a) {
          ((this.#e = a),
            this.#d?.(),
            (this.#d = a((a) => {
              "boolean" == typeof a ? this.setFocused(a) : this.onFocus();
            })));
        }
        setFocused(a) {
          this.#c !== a && ((this.#c = a), this.onFocus());
        }
        onFocus() {
          let a = this.isFocused();
          this.listeners.forEach((b) => {
            b(a);
          });
        }
        isFocused() {
          return "boolean" == typeof this.#c ? this.#c : globalThis.document?.visibilityState !== "hidden";
        }
      })(),
      C = new (class extends A {
        #f = !0;
        #d;
        #e;
        constructor() {
          (super(), (this.#e = (a) => {}));
        }
        onSubscribe() {
          this.#d || this.setEventListener(this.#e);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#d?.(), (this.#d = void 0));
        }
        setEventListener(a) {
          ((this.#e = a), this.#d?.(), (this.#d = a(this.setOnline.bind(this))));
        }
        setOnline(a) {
          this.#f !== a &&
            ((this.#f = a),
            this.listeners.forEach((b) => {
              b(a);
            }));
        }
        isOnline() {
          return this.#f;
        }
      })();
    function D(a) {
      return Math.min(1e3 * 2 ** a, 3e4);
    }
    function E(a) {
      return (a ?? "online") !== "online" || C.isOnline();
    }
    var F = class extends Error {
      constructor(a) {
        (super("CancelledError"), (this.revert = a?.revert), (this.silent = a?.silent));
      }
    };
    function G(a) {
      let b,
        c = !1,
        d = 0,
        e = (function () {
          let a,
            b,
            c = new Promise((c, d) => {
              ((a = c), (b = d));
            });
          function d(a) {
            (Object.assign(c, a), delete c.resolve, delete c.reject);
          }
          return (
            (c.status = "pending"),
            c.catch(() => {}),
            (c.resolve = (b) => {
              (d({ status: "fulfilled", value: b }), a(b));
            }),
            (c.reject = (a) => {
              (d({ status: "rejected", reason: a }), b(a));
            }),
            c
          );
        })(),
        f = () => B.isFocused() && ("always" === a.networkMode || C.isOnline()) && a.canRun(),
        g = () => E(a.networkMode) && a.canRun(),
        h = (a) => {
          "pending" === e.status && (b?.(), e.resolve(a));
        },
        i = (a) => {
          "pending" === e.status && (b?.(), e.reject(a));
        },
        k = () =>
          new Promise((c) => {
            ((b = (a) => {
              ("pending" !== e.status || f()) && c(a);
            }),
              a.onPause?.());
          }).then(() => {
            ((b = void 0), "pending" === e.status && a.onContinue?.());
          }),
        l = () => {
          let b;
          if ("pending" !== e.status) return;
          let g = 0 === d ? a.initialPromise : void 0;
          try {
            b = g ?? a.fn();
          } catch (a) {
            b = Promise.reject(a);
          }
          Promise.resolve(b)
            .then(h)
            .catch((b) => {
              if ("pending" !== e.status) return;
              let g = a.retry ?? 0,
                h = a.retryDelay ?? D,
                m = "function" == typeof h ? h(d, b) : h,
                n = !0 === g || ("number" == typeof g && d < g) || ("function" == typeof g && g(d, b));
              c || !n
                ? i(b)
                : (d++,
                  a.onFail?.(d, b),
                  new Promise((a) => {
                    j.setTimeout(a, m);
                  })
                    .then(() => (f() ? void 0 : k()))
                    .then(() => {
                      c ? i(b) : l();
                    }));
            });
        };
      return {
        promise: e,
        status: () => e.status,
        cancel: (b) => {
          if ("pending" === e.status) {
            let c = new F(b);
            (i(c), a.onCancel?.(c));
          }
        },
        continue: () => (b?.(), e),
        cancelRetry: () => {
          c = !0;
        },
        continueRetry: () => {
          c = !1;
        },
        canStart: g,
        start: () => (g() ? l() : k().then(l), e),
      };
    }
    var H = class {
        #g;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          var a;
          (this.clearGcTimeout(),
            "number" == typeof (a = this.gcTime) &&
              a >= 0 &&
              a !== 1 / 0 &&
              (this.#g = j.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)));
        }
        updateGcTime(a) {
          this.gcTime = Math.max(this.gcTime || 0, a ?? 1 / 0);
        }
        clearGcTimeout() {
          this.#g && (j.clearTimeout(this.#g), (this.#g = void 0));
        }
      },
      I = class extends H {
        #h;
        #i;
        #j;
        #k;
        #l;
        #m;
        #n;
        constructor(a) {
          (super(),
            (this.#n = !1),
            (this.#m = a.defaultOptions),
            this.setOptions(a.options),
            (this.observers = []),
            (this.#k = a.client),
            (this.#j = this.#k.getQueryCache()),
            (this.queryKey = a.queryKey),
            (this.queryHash = a.queryHash),
            (this.#h = K(this.options)),
            (this.state = a.state ?? this.#h),
            this.scheduleGc());
        }
        get meta() {
          return this.options.meta;
        }
        get promise() {
          return this.#l?.promise;
        }
        setOptions(a) {
          if (
            ((this.options = { ...this.#m, ...a }),
            this.updateGcTime(this.options.gcTime),
            this.state && void 0 === this.state.data)
          ) {
            let a = K(this.options);
            void 0 !== a.data && (this.setState(J(a.data, a.dataUpdatedAt)), (this.#h = a));
          }
        }
        optionalRemove() {
          this.observers.length || "idle" !== this.state.fetchStatus || this.#j.remove(this);
        }
        setData(a, b) {
          var c, d;
          let e =
            ((c = this.state.data),
            "function" == typeof (d = this.options).structuralSharing
              ? d.structuralSharing(c, a)
              : !1 !== d.structuralSharing
                ? (function a(b, c) {
                    if (b === c) return b;
                    let d = s(b) && s(c);
                    if (!d && !(t(b) && t(c))) return c;
                    let e = (d ? b : Object.keys(b)).length,
                      f = d ? c : Object.keys(c),
                      g = f.length,
                      h = d ? Array(g) : {},
                      i = 0;
                    for (let j = 0; j < g; j++) {
                      let g = d ? j : f[j],
                        k = b[g],
                        l = c[g];
                      if (k === l) {
                        ((h[g] = k), (d ? j < e : r.call(b, g)) && i++);
                        continue;
                      }
                      if (null === k || null === l || "object" != typeof k || "object" != typeof l) {
                        h[g] = l;
                        continue;
                      }
                      let m = a(k, l);
                      ((h[g] = m), m === k && i++);
                    }
                    return e === g && i === e ? b : h;
                  })(c, a)
                : a);
          return (this.#o({ data: e, type: "success", dataUpdatedAt: b?.updatedAt, manual: b?.manual }), e);
        }
        setState(a, b) {
          this.#o({ type: "setState", state: a, setStateOptions: b });
        }
        cancel(a) {
          let b = this.#l?.promise;
          return (this.#l?.cancel(a), b ? b.then(k).catch(k) : Promise.resolve());
        }
        destroy() {
          (super.destroy(), this.cancel({ silent: !0 }));
        }
        reset() {
          (this.destroy(), this.setState(this.#h));
        }
        isActive() {
          return this.observers.some((a) => {
            var b;
            return !1 !== ((b = a.options.enabled), "function" == typeof b ? b(this) : b);
          });
        }
        isDisabled() {
          return this.getObserversCount() > 0
            ? !this.isActive()
            : this.options.queryFn === x || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
          return this.getObserversCount() > 0 && this.observers.some((a) => "static" === l(a.options.staleTime, this));
        }
        isStale() {
          return this.getObserversCount() > 0
            ? this.observers.some((a) => a.getCurrentResult().isStale)
            : void 0 === this.state.data || this.state.isInvalidated;
        }
        isStaleByTime(a = 0) {
          return (
            void 0 === this.state.data ||
            ("static" !== a &&
              (!!this.state.isInvalidated || !Math.max(this.state.dataUpdatedAt + (a || 0) - Date.now(), 0)))
          );
        }
        onFocus() {
          let a = this.observers.find((a) => a.shouldFetchOnWindowFocus());
          (a?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
        }
        onOnline() {
          let a = this.observers.find((a) => a.shouldFetchOnReconnect());
          (a?.refetch({ cancelRefetch: !1 }), this.#l?.continue());
        }
        addObserver(a) {
          this.observers.includes(a) ||
            (this.observers.push(a),
            this.clearGcTimeout(),
            this.#j.notify({ type: "observerAdded", query: this, observer: a }));
        }
        removeObserver(a) {
          this.observers.includes(a) &&
            ((this.observers = this.observers.filter((b) => b !== a)),
            this.observers.length ||
              (this.#l && (this.#n ? this.#l.cancel({ revert: !0 }) : this.#l.cancelRetry()), this.scheduleGc()),
            this.#j.notify({ type: "observerRemoved", query: this, observer: a }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.#o({ type: "invalidate" });
        }
        async fetch(a, b) {
          let c;
          if ("idle" !== this.state.fetchStatus && this.#l?.status() !== "rejected") {
            if (void 0 !== this.state.data && b?.cancelRefetch) this.cancel({ silent: !0 });
            else if (this.#l) return (this.#l.continueRetry(), this.#l.promise);
          }
          if ((a && this.setOptions(a), !this.options.queryFn)) {
            let a = this.observers.find((a) => a.options.queryFn);
            a && this.setOptions(a.options);
          }
          let d = new AbortController(),
            e = (a) => {
              Object.defineProperty(a, "signal", { enumerable: !0, get: () => ((this.#n = !0), d.signal) });
            },
            f = () => {
              let a,
                c = y(this.options, b),
                d = (e((a = { client: this.#k, queryKey: this.queryKey, meta: this.meta })), a);
              return ((this.#n = !1), this.options.persister) ? this.options.persister(c, d, this) : c(d);
            },
            g =
              (e(
                (c = {
                  fetchOptions: b,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: this.#k,
                  state: this.state,
                  fetchFn: f,
                }),
              ),
              c);
          (this.options.behavior?.onFetch(g, this),
            (this.#i = this.state),
            ("idle" === this.state.fetchStatus || this.state.fetchMeta !== g.fetchOptions?.meta) &&
              this.#o({ type: "fetch", meta: g.fetchOptions?.meta }),
            (this.#l = G({
              initialPromise: b?.initialPromise,
              fn: g.fetchFn,
              onCancel: (a) => {
                (a instanceof F && a.revert && this.setState({ ...this.#i, fetchStatus: "idle" }), d.abort());
              },
              onFail: (a, b) => {
                this.#o({ type: "failed", failureCount: a, error: b });
              },
              onPause: () => {
                this.#o({ type: "pause" });
              },
              onContinue: () => {
                this.#o({ type: "continue" });
              },
              retry: g.options.retry,
              retryDelay: g.options.retryDelay,
              networkMode: g.options.networkMode,
              canRun: () => !0,
            })));
          try {
            let a = await this.#l.start();
            if (void 0 === a) throw Error(`${this.queryHash} data is undefined`);
            return (
              this.setData(a),
              this.#j.config.onSuccess?.(a, this),
              this.#j.config.onSettled?.(a, this.state.error, this),
              a
            );
          } catch (a) {
            if (a instanceof F) {
              if (a.silent) return this.#l.promise;
              else if (a.revert) {
                if (void 0 === this.state.data) throw a;
                return this.state.data;
              }
            }
            throw (
              this.#o({ type: "error", error: a }),
              this.#j.config.onError?.(a, this),
              this.#j.config.onSettled?.(this.state.data, a, this),
              a
            );
          } finally {
            this.scheduleGc();
          }
        }
        #o(a) {
          let b = (b) => {
            switch (a.type) {
              case "failed":
                return { ...b, fetchFailureCount: a.failureCount, fetchFailureReason: a.error };
              case "pause":
                return { ...b, fetchStatus: "paused" };
              case "continue":
                return { ...b, fetchStatus: "fetching" };
              case "fetch":
                var c;
                return {
                  ...b,
                  ...((c = b.data),
                  {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: E(this.options.networkMode) ? "fetching" : "paused",
                    ...(void 0 === c && { error: null, status: "pending" }),
                  }),
                  fetchMeta: a.meta ?? null,
                };
              case "success":
                let d = {
                  ...b,
                  ...J(a.data, a.dataUpdatedAt),
                  dataUpdateCount: b.dataUpdateCount + 1,
                  ...(!a.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
                };
                return ((this.#i = a.manual ? d : void 0), d);
              case "error":
                let e = a.error;
                return {
                  ...b,
                  error: e,
                  errorUpdateCount: b.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: b.fetchFailureCount + 1,
                  fetchFailureReason: e,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...b, isInvalidated: !0 };
              case "setState":
                return { ...b, ...a.state };
            }
          };
          ((this.state = b(this.state)),
            z.batch(() => {
              (this.observers.forEach((a) => {
                a.onQueryUpdate();
              }),
                this.#j.notify({ query: this, type: "updated", action: a }));
            }));
        }
      };
    function J(a, b) {
      return { data: a, dataUpdatedAt: b ?? Date.now(), error: null, isInvalidated: !1, status: "success" };
    }
    function K(a) {
      let b = "function" == typeof a.initialData ? a.initialData() : a.initialData,
        c = void 0 !== b,
        d = c ? ("function" == typeof a.initialDataUpdatedAt ? a.initialDataUpdatedAt() : a.initialDataUpdatedAt) : 0;
      return {
        data: b,
        dataUpdateCount: 0,
        dataUpdatedAt: c ? (d ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: c ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    var L = class extends A {
        constructor(a = {}) {
          (super(), (this.config = a), (this.#p = new Map()));
        }
        #p;
        build(a, b, c) {
          let d = b.queryKey,
            e = b.queryHash ?? o(d, b),
            f = this.get(e);
          return (
            f ||
              ((f = new I({
                client: a,
                queryKey: d,
                queryHash: e,
                options: a.defaultQueryOptions(b),
                state: c,
                defaultOptions: a.getQueryDefaults(d),
              })),
              this.add(f)),
            f
          );
        }
        add(a) {
          this.#p.has(a.queryHash) || (this.#p.set(a.queryHash, a), this.notify({ type: "added", query: a }));
        }
        remove(a) {
          let b = this.#p.get(a.queryHash);
          b && (a.destroy(), b === a && this.#p.delete(a.queryHash), this.notify({ type: "removed", query: a }));
        }
        clear() {
          z.batch(() => {
            this.getAll().forEach((a) => {
              this.remove(a);
            });
          });
        }
        get(a) {
          return this.#p.get(a);
        }
        getAll() {
          return [...this.#p.values()];
        }
        find(a) {
          let b = { exact: !0, ...a };
          return this.getAll().find((a) => m(b, a));
        }
        findAll(a = {}) {
          let b = this.getAll();
          return Object.keys(a).length > 0 ? b.filter((b) => m(a, b)) : b;
        }
        notify(a) {
          z.batch(() => {
            this.listeners.forEach((b) => {
              b(a);
            });
          });
        }
        onFocus() {
          z.batch(() => {
            this.getAll().forEach((a) => {
              a.onFocus();
            });
          });
        }
        onOnline() {
          z.batch(() => {
            this.getAll().forEach((a) => {
              a.onOnline();
            });
          });
        }
      },
      M = class extends H {
        #k;
        #q;
        #r;
        #l;
        constructor(a) {
          (super(),
            (this.#k = a.client),
            (this.mutationId = a.mutationId),
            (this.#r = a.mutationCache),
            (this.#q = []),
            (this.state = a.state || {
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
            this.setOptions(a.options),
            this.scheduleGc());
        }
        setOptions(a) {
          ((this.options = a), this.updateGcTime(this.options.gcTime));
        }
        get meta() {
          return this.options.meta;
        }
        addObserver(a) {
          this.#q.includes(a) ||
            (this.#q.push(a),
            this.clearGcTimeout(),
            this.#r.notify({ type: "observerAdded", mutation: this, observer: a }));
        }
        removeObserver(a) {
          ((this.#q = this.#q.filter((b) => b !== a)),
            this.scheduleGc(),
            this.#r.notify({ type: "observerRemoved", mutation: this, observer: a }));
        }
        optionalRemove() {
          this.#q.length || ("pending" === this.state.status ? this.scheduleGc() : this.#r.remove(this));
        }
        continue() {
          return this.#l?.continue() ?? this.execute(this.state.variables);
        }
        async execute(a) {
          let b = () => {
              this.#o({ type: "continue" });
            },
            c = { client: this.#k, meta: this.options.meta, mutationKey: this.options.mutationKey };
          this.#l = G({
            fn: () =>
              this.options.mutationFn ? this.options.mutationFn(a, c) : Promise.reject(Error("No mutationFn found")),
            onFail: (a, b) => {
              this.#o({ type: "failed", failureCount: a, error: b });
            },
            onPause: () => {
              this.#o({ type: "pause" });
            },
            onContinue: b,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#r.canRun(this),
          });
          let d = "pending" === this.state.status,
            e = !this.#l.canStart();
          try {
            if (d) b();
            else {
              (this.#o({ type: "pending", variables: a, isPaused: e }), await this.#r.config.onMutate?.(a, this, c));
              let b = await this.options.onMutate?.(a, c);
              b !== this.state.context && this.#o({ type: "pending", context: b, variables: a, isPaused: e });
            }
            let f = await this.#l.start();
            return (
              await this.#r.config.onSuccess?.(f, a, this.state.context, this, c),
              await this.options.onSuccess?.(f, a, this.state.context, c),
              await this.#r.config.onSettled?.(f, null, this.state.variables, this.state.context, this, c),
              await this.options.onSettled?.(f, null, a, this.state.context, c),
              this.#o({ type: "success", data: f }),
              f
            );
          } catch (b) {
            try {
              throw (
                await this.#r.config.onError?.(b, a, this.state.context, this, c),
                await this.options.onError?.(b, a, this.state.context, c),
                await this.#r.config.onSettled?.(void 0, b, this.state.variables, this.state.context, this, c),
                await this.options.onSettled?.(void 0, b, a, this.state.context, c),
                b
              );
            } finally {
              this.#o({ type: "error", error: b });
            }
          } finally {
            this.#r.runNext(this);
          }
        }
        #o(a) {
          ((this.state = ((b) => {
            switch (a.type) {
              case "failed":
                return { ...b, failureCount: a.failureCount, failureReason: a.error };
              case "pause":
                return { ...b, isPaused: !0 };
              case "continue":
                return { ...b, isPaused: !1 };
              case "pending":
                return {
                  ...b,
                  context: a.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: a.isPaused,
                  status: "pending",
                  variables: a.variables,
                  submittedAt: Date.now(),
                };
              case "success":
                return {
                  ...b,
                  data: a.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...b,
                  data: void 0,
                  error: a.error,
                  failureCount: b.failureCount + 1,
                  failureReason: a.error,
                  isPaused: !1,
                  status: "error",
                };
            }
          })(this.state)),
            z.batch(() => {
              (this.#q.forEach((b) => {
                b.onMutationUpdate(a);
              }),
                this.#r.notify({ mutation: this, type: "updated", action: a }));
            }));
        }
      },
      N = class extends A {
        constructor(a = {}) {
          (super(), (this.config = a), (this.#s = new Set()), (this.#t = new Map()), (this.#u = 0));
        }
        #s;
        #t;
        #u;
        build(a, b, c) {
          let d = new M({
            client: a,
            mutationCache: this,
            mutationId: ++this.#u,
            options: a.defaultMutationOptions(b),
            state: c,
          });
          return (this.add(d), d);
        }
        add(a) {
          this.#s.add(a);
          let b = O(a);
          if ("string" == typeof b) {
            let c = this.#t.get(b);
            c ? c.push(a) : this.#t.set(b, [a]);
          }
          this.notify({ type: "added", mutation: a });
        }
        remove(a) {
          if (this.#s.delete(a)) {
            let b = O(a);
            if ("string" == typeof b) {
              let c = this.#t.get(b);
              if (c)
                if (c.length > 1) {
                  let b = c.indexOf(a);
                  -1 !== b && c.splice(b, 1);
                } else c[0] === a && this.#t.delete(b);
            }
          }
          this.notify({ type: "removed", mutation: a });
        }
        canRun(a) {
          let b = O(a);
          if ("string" != typeof b) return !0;
          {
            let c = this.#t.get(b),
              d = c?.find((a) => "pending" === a.state.status);
            return !d || d === a;
          }
        }
        runNext(a) {
          let b = O(a);
          if ("string" != typeof b) return Promise.resolve();
          {
            let c = this.#t.get(b)?.find((b) => b !== a && b.state.isPaused);
            return c?.continue() ?? Promise.resolve();
          }
        }
        clear() {
          z.batch(() => {
            (this.#s.forEach((a) => {
              this.notify({ type: "removed", mutation: a });
            }),
              this.#s.clear(),
              this.#t.clear());
          });
        }
        getAll() {
          return Array.from(this.#s);
        }
        find(a) {
          let b = { exact: !0, ...a };
          return this.getAll().find((a) => n(b, a));
        }
        findAll(a = {}) {
          return this.getAll().filter((b) => n(a, b));
        }
        notify(a) {
          z.batch(() => {
            this.listeners.forEach((b) => {
              b(a);
            });
          });
        }
        resumePausedMutations() {
          let a = this.getAll().filter((a) => a.state.isPaused);
          return z.batch(() => Promise.all(a.map((a) => a.continue().catch(k))));
        }
      };
    function O(a) {
      return a.options.scope?.id;
    }
    function P(a) {
      return {
        onFetch: (b, c) => {
          let d = b.options,
            e = b.fetchOptions?.meta?.fetchMore?.direction,
            f = b.state.data?.pages || [],
            g = b.state.data?.pageParams || [],
            h = { pages: [], pageParams: [] },
            i = 0,
            j = async () => {
              let c = !1,
                j = y(b.options, b.fetchOptions),
                k = async (a, d, e) => {
                  let f;
                  if (c) return Promise.reject();
                  if (null == d && a.pages.length) return Promise.resolve(a);
                  let g =
                      (Object.defineProperty(
                        (f = {
                          client: b.client,
                          queryKey: b.queryKey,
                          pageParam: d,
                          direction: e ? "backward" : "forward",
                          meta: b.options.meta,
                        }),
                        "signal",
                        {
                          enumerable: !0,
                          get: () => (
                            b.signal.aborted
                              ? (c = !0)
                              : b.signal.addEventListener("abort", () => {
                                  c = !0;
                                }),
                            b.signal
                          ),
                        },
                      ),
                      f),
                    h = await j(g),
                    { maxPages: i } = b.options,
                    k = e ? w : v;
                  return { pages: k(a.pages, h, i), pageParams: k(a.pageParams, d, i) };
                };
              if (e && f.length) {
                let a = "backward" === e,
                  b = { pages: f, pageParams: g },
                  c = (
                    a
                      ? function (a, { pages: b, pageParams: c }) {
                          return b.length > 0 ? a.getPreviousPageParam?.(b[0], b, c[0], c) : void 0;
                        }
                      : Q
                  )(d, b);
                h = await k(b, c, a);
              } else {
                let b = a ?? f.length;
                do {
                  let a = 0 === i ? (g[0] ?? d.initialPageParam) : Q(d, h);
                  if (i > 0 && null == a) break;
                  ((h = await k(h, a)), i++);
                } while (i < b);
              }
              return h;
            };
          b.options.persister
            ? (b.fetchFn = () =>
                b.options.persister?.(
                  j,
                  { client: b.client, queryKey: b.queryKey, meta: b.options.meta, signal: b.signal },
                  c,
                ))
            : (b.fetchFn = j);
        },
      };
    }
    function Q(a, { pages: b, pageParams: c }) {
      let d = b.length - 1;
      return b.length > 0 ? a.getNextPageParam(b[d], b, c[d], c) : void 0;
    }
    var R = class {
        #v;
        #r;
        #m;
        #w;
        #x;
        #y;
        #z;
        #A;
        constructor(a = {}) {
          ((this.#v = a.queryCache || new L()),
            (this.#r = a.mutationCache || new N()),
            (this.#m = a.defaultOptions || {}),
            (this.#w = new Map()),
            (this.#x = new Map()),
            (this.#y = 0));
        }
        mount() {
          (this.#y++,
            1 === this.#y &&
              ((this.#z = B.subscribe(async (a) => {
                a && (await this.resumePausedMutations(), this.#v.onFocus());
              })),
              (this.#A = C.subscribe(async (a) => {
                a && (await this.resumePausedMutations(), this.#v.onOnline());
              }))));
        }
        unmount() {
          (this.#y--, 0 === this.#y && (this.#z?.(), (this.#z = void 0), this.#A?.(), (this.#A = void 0)));
        }
        isFetching(a) {
          return this.#v.findAll({ ...a, fetchStatus: "fetching" }).length;
        }
        isMutating(a) {
          return this.#r.findAll({ ...a, status: "pending" }).length;
        }
        getQueryData(a) {
          let b = this.defaultQueryOptions({ queryKey: a });
          return this.#v.get(b.queryHash)?.state.data;
        }
        ensureQueryData(a) {
          let b = this.defaultQueryOptions(a),
            c = this.#v.build(this, b),
            d = c.state.data;
          return void 0 === d
            ? this.fetchQuery(a)
            : (a.revalidateIfStale && c.isStaleByTime(l(b.staleTime, c)) && this.prefetchQuery(b), Promise.resolve(d));
        }
        getQueriesData(a) {
          return this.#v.findAll(a).map(({ queryKey: a, state: b }) => [a, b.data]);
        }
        setQueryData(a, b, c) {
          let d = this.defaultQueryOptions({ queryKey: a }),
            e = this.#v.get(d.queryHash),
            f = e?.state.data,
            g = "function" == typeof b ? b(f) : b;
          if (void 0 !== g) return this.#v.build(this, d).setData(g, { ...c, manual: !0 });
        }
        setQueriesData(a, b, c) {
          return z.batch(() => this.#v.findAll(a).map(({ queryKey: a }) => [a, this.setQueryData(a, b, c)]));
        }
        getQueryState(a) {
          let b = this.defaultQueryOptions({ queryKey: a });
          return this.#v.get(b.queryHash)?.state;
        }
        removeQueries(a) {
          let b = this.#v;
          z.batch(() => {
            b.findAll(a).forEach((a) => {
              b.remove(a);
            });
          });
        }
        resetQueries(a, b) {
          let c = this.#v;
          return z.batch(
            () => (
              c.findAll(a).forEach((a) => {
                a.reset();
              }),
              this.refetchQueries({ type: "active", ...a }, b)
            ),
          );
        }
        cancelQueries(a, b = {}) {
          let c = { revert: !0, ...b };
          return Promise.all(z.batch(() => this.#v.findAll(a).map((a) => a.cancel(c))))
            .then(k)
            .catch(k);
        }
        invalidateQueries(a, b = {}) {
          return z.batch(() =>
            (this.#v.findAll(a).forEach((a) => {
              a.invalidate();
            }),
            a?.refetchType === "none")
              ? Promise.resolve()
              : this.refetchQueries({ ...a, type: a?.refetchType ?? a?.type ?? "active" }, b),
          );
        }
        refetchQueries(a, b = {}) {
          let c = { ...b, cancelRefetch: b.cancelRefetch ?? !0 };
          return Promise.all(
            z.batch(() =>
              this.#v
                .findAll(a)
                .filter((a) => !a.isDisabled() && !a.isStatic())
                .map((a) => {
                  let b = a.fetch(void 0, c);
                  return (c.throwOnError || (b = b.catch(k)), "paused" === a.state.fetchStatus ? Promise.resolve() : b);
                }),
            ),
          ).then(k);
        }
        fetchQuery(a) {
          let b = this.defaultQueryOptions(a);
          void 0 === b.retry && (b.retry = !1);
          let c = this.#v.build(this, b);
          return c.isStaleByTime(l(b.staleTime, c)) ? c.fetch(b) : Promise.resolve(c.state.data);
        }
        prefetchQuery(a) {
          return this.fetchQuery(a).then(k).catch(k);
        }
        fetchInfiniteQuery(a) {
          return ((a.behavior = P(a.pages)), this.fetchQuery(a));
        }
        prefetchInfiniteQuery(a) {
          return this.fetchInfiniteQuery(a).then(k).catch(k);
        }
        ensureInfiniteQueryData(a) {
          return ((a.behavior = P(a.pages)), this.ensureQueryData(a));
        }
        resumePausedMutations() {
          return C.isOnline() ? this.#r.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
          return this.#v;
        }
        getMutationCache() {
          return this.#r;
        }
        getDefaultOptions() {
          return this.#m;
        }
        setDefaultOptions(a) {
          this.#m = a;
        }
        setQueryDefaults(a, b) {
          this.#w.set(p(a), { queryKey: a, defaultOptions: b });
        }
        getQueryDefaults(a) {
          let b = [...this.#w.values()],
            c = {};
          return (
            b.forEach((b) => {
              q(a, b.queryKey) && Object.assign(c, b.defaultOptions);
            }),
            c
          );
        }
        setMutationDefaults(a, b) {
          this.#x.set(p(a), { mutationKey: a, defaultOptions: b });
        }
        getMutationDefaults(a) {
          let b = [...this.#x.values()],
            c = {};
          return (
            b.forEach((b) => {
              q(a, b.mutationKey) && Object.assign(c, b.defaultOptions);
            }),
            c
          );
        }
        defaultQueryOptions(a) {
          if (a._defaulted) return a;
          let b = { ...this.#m.queries, ...this.getQueryDefaults(a.queryKey), ...a, _defaulted: !0 };
          return (
            b.queryHash || (b.queryHash = o(b.queryKey, b)),
            void 0 === b.refetchOnReconnect && (b.refetchOnReconnect = "always" !== b.networkMode),
            void 0 === b.throwOnError && (b.throwOnError = !!b.suspense),
            !b.networkMode && b.persister && (b.networkMode = "offlineFirst"),
            b.queryFn === x && (b.enabled = !1),
            b
          );
        }
        defaultMutationOptions(a) {
          return a?._defaulted
            ? a
            : {
                ...this.#m.mutations,
                ...(a?.mutationKey && this.getMutationDefaults(a.mutationKey)),
                ...a,
                _defaulted: !0,
              };
        }
        clear() {
          (this.#v.clear(), this.#r.clear());
        }
      },
      S = a.i(805485),
      T = S.createContext(void 0),
      U = ({ client: a, children: b }) => (
        S.useEffect(
          () => (
            a.mount(),
            () => {
              a.unmount();
            }
          ),
          [a],
        ),
        (0, h.jsx)(T.Provider, { value: a, children: b })
      );
    function V(a) {
      let { children: b } = a,
        c = new R({ defaultOptions: { queries: { staleTime: 6e4 } } });
      return (0, h.jsx)(U, { client: c, children: b });
    }
    a.s(["Providers", () => V], 37068);
  },
  307515,
  (a) => {
    "use strict";
    var b = a.i(13795),
      c = a.i(703498),
      d = a.i(728226),
      e = a.i(999803),
      f = a.i(805485);
    (a.i(896800), a.i(930586));
    a.i(369471);
    var g = a.i(859347),
      h = a.i(496297),
      i = a.i(28390),
      j = a.i(571993),
      k = a.i(222717),
      l = a.i(468359),
      m = a.i(298506),
      n = a.i(579699),
      o = a.i(309986),
      p = a.i(380482),
      q = a.i(996745),
      r = a.i(412633),
      s = a.i(79217),
      t = a.i(83495),
      u = a.i(101747),
      v = a.i(817228),
      w = "NavigationMenu",
      [x, y, z] = (0, q.createCollection)(w),
      [A, B, C] = (0, q.createCollection)(w),
      [D, E] = (0, i.createContextScope)(w, [z, C]),
      [F, G] = D(w),
      [H, I] = D(w);
    f.forwardRef((a, c) => {
      let {
          __scopeNavigationMenu: d,
          value: e,
          onValueChange: g,
          defaultValue: h,
          delayDuration: i = 200,
          skipDelayDuration: j = 300,
          orientation: o = "horizontal",
          dir: p,
          ...q
        } = a,
        [r, s] = f.useState(null),
        t = (0, m.useComposedRefs)(c, (a) => s(a)),
        u = (0, n.useDirection)(p),
        v = f.useRef(0),
        x = f.useRef(0),
        y = f.useRef(0),
        [z, A] = f.useState(!0),
        [B, C] = (0, l.useControllableState)({
          prop: e,
          onChange: (a) => {
            let b = j > 0;
            ("" !== a
              ? (window.clearTimeout(y.current), b && A(!1))
              : (window.clearTimeout(y.current), (y.current = window.setTimeout(() => A(!0), j))),
              g?.(a));
          },
          defaultProp: h ?? "",
          caller: w,
        }),
        D = f.useCallback(() => {
          (window.clearTimeout(x.current), (x.current = window.setTimeout(() => C(""), 150)));
        }, [C]),
        E = f.useCallback(
          (a) => {
            (window.clearTimeout(x.current), C(a));
          },
          [C],
        ),
        F = f.useCallback(
          (a) => {
            B === a
              ? window.clearTimeout(x.current)
              : (v.current = window.setTimeout(() => {
                  (window.clearTimeout(x.current), C(a));
                }, i));
          },
          [B, C, i],
        );
      return (
        f.useEffect(
          () => () => {
            (window.clearTimeout(v.current), window.clearTimeout(x.current), window.clearTimeout(y.current));
          },
          [],
        ),
        (0, b.jsx)(K, {
          scope: d,
          isRootMenu: !0,
          value: B,
          dir: u,
          orientation: o,
          rootNavigationMenu: r,
          onTriggerEnter: (a) => {
            (window.clearTimeout(v.current), z ? F(a) : E(a));
          },
          onTriggerLeave: () => {
            (window.clearTimeout(v.current), D());
          },
          onContentEnter: () => window.clearTimeout(x.current),
          onContentLeave: D,
          onItemSelect: (a) => {
            C((b) => (b === a ? "" : a));
          },
          onItemDismiss: () => C(""),
          children: (0, b.jsx)(k.Primitive.nav, { "aria-label": "Main", "data-orientation": o, dir: u, ...q, ref: t }),
        })
      );
    }).displayName = w;
    var J = "NavigationMenuSub";
    f.forwardRef((a, c) => {
      let {
          __scopeNavigationMenu: d,
          value: e,
          onValueChange: f,
          defaultValue: g,
          orientation: h = "horizontal",
          ...i
        } = a,
        j = G(J, d),
        [m, n] = (0, l.useControllableState)({ prop: e, onChange: f, defaultProp: g ?? "", caller: J });
      return (0, b.jsx)(K, {
        scope: d,
        isRootMenu: !1,
        value: m,
        dir: j.dir,
        orientation: h,
        rootNavigationMenu: j.rootNavigationMenu,
        onTriggerEnter: (a) => n(a),
        onItemSelect: (a) => n(a),
        onItemDismiss: () => n(""),
        children: (0, b.jsx)(k.Primitive.div, { "data-orientation": h, ...i, ref: c }),
      });
    }).displayName = J;
    var K = (a) => {
        let {
            scope: c,
            isRootMenu: d,
            rootNavigationMenu: e,
            dir: g,
            orientation: h,
            children: i,
            value: j,
            onItemSelect: k,
            onItemDismiss: l,
            onTriggerEnter: m,
            onTriggerLeave: n,
            onContentEnter: o,
            onContentLeave: q,
          } = a,
          [r, t] = f.useState(null),
          [v, w] = f.useState(new Map()),
          [y, z] = f.useState(null);
        return (0, b.jsx)(F, {
          scope: c,
          isRootMenu: d,
          rootNavigationMenu: e,
          value: j,
          previousValue: (0, s.usePrevious)(j),
          baseId: (0, p.useId)(),
          dir: g,
          orientation: h,
          viewport: r,
          onViewportChange: t,
          indicatorTrack: y,
          onIndicatorTrackChange: z,
          onTriggerEnter: (0, u.useCallbackRef)(m),
          onTriggerLeave: (0, u.useCallbackRef)(n),
          onContentEnter: (0, u.useCallbackRef)(o),
          onContentLeave: (0, u.useCallbackRef)(q),
          onItemSelect: (0, u.useCallbackRef)(k),
          onItemDismiss: (0, u.useCallbackRef)(l),
          onViewportContentChange: f.useCallback((a, b) => {
            w((c) => (c.set(a, b), new Map(c)));
          }, []),
          onViewportContentRemove: f.useCallback((a) => {
            w((b) => (b.has(a) ? (b.delete(a), new Map(b)) : b));
          }, []),
          children: (0, b.jsx)(x.Provider, { scope: c, children: (0, b.jsx)(H, { scope: c, items: v, children: i }) }),
        });
      },
      L = "NavigationMenuList";
    f.forwardRef((a, c) => {
      let { __scopeNavigationMenu: d, ...e } = a,
        f = G(L, d),
        g = (0, b.jsx)(k.Primitive.ul, { "data-orientation": f.orientation, ...e, ref: c });
      return (0, b.jsx)(k.Primitive.div, {
        style: { position: "relative" },
        ref: f.onIndicatorTrackChange,
        children: (0, b.jsx)(x.Slot, {
          scope: d,
          children: f.isRootMenu ? (0, b.jsx)(_, { asChild: !0, children: g }) : g,
        }),
      });
    }).displayName = L;
    var M = "NavigationMenuItem",
      [N, O] = D(M),
      P = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, value: e, ...g } = a,
          h = (0, p.useId)(),
          i = f.useRef(null),
          j = f.useRef(null),
          l = f.useRef(null),
          m = f.useRef(() => {}),
          n = f.useRef(!1),
          o = f.useCallback((a = "start") => {
            if (i.current) {
              m.current();
              let b = ac(i.current);
              b.length && ad("start" === a ? b : b.reverse());
            }
          }, []),
          q = f.useCallback(() => {
            if (i.current) {
              var a;
              let b = ac(i.current);
              b.length &&
                ((a = b).forEach((a) => {
                  ((a.dataset.tabindex = a.getAttribute("tabindex") || ""), a.setAttribute("tabindex", "-1"));
                }),
                (m.current = () => {
                  a.forEach((a) => {
                    let b = a.dataset.tabindex;
                    a.setAttribute("tabindex", b);
                  });
                }));
            }
          }, []);
        return (0, b.jsx)(N, {
          scope: d,
          value: e || h || "LEGACY_REACT_AUTO_VALUE",
          triggerRef: j,
          contentRef: i,
          focusProxyRef: l,
          wasEscapeCloseRef: n,
          onEntryKeyDown: o,
          onFocusProxyEnter: o,
          onRootContentClose: q,
          onContentFocusOutside: q,
          children: (0, b.jsx)(k.Primitive.li, { ...g, ref: c }),
        });
      });
    P.displayName = M;
    var Q = "NavigationMenuTrigger";
    f.forwardRef((a, c) => {
      let { __scopeNavigationMenu: d, disabled: e, ...g } = a,
        h = G(Q, a.__scopeNavigationMenu),
        i = O(Q, a.__scopeNavigationMenu),
        l = f.useRef(null),
        n = (0, m.useComposedRefs)(l, i.triggerRef, c),
        o = ag(h.baseId, i.value),
        p = ah(h.baseId, i.value),
        q = f.useRef(!1),
        r = f.useRef(!1),
        s = i.value === h.value;
      return (0, b.jsxs)(b.Fragment, {
        children: [
          (0, b.jsx)(x.ItemSlot, {
            scope: d,
            value: i.value,
            children: (0, b.jsx)(ab, {
              asChild: !0,
              children: (0, b.jsx)(k.Primitive.button, {
                id: o,
                disabled: e,
                "data-disabled": e ? "" : void 0,
                "data-state": af(s),
                "aria-expanded": s,
                "aria-controls": p,
                ...g,
                ref: n,
                onPointerEnter: (0, j.composeEventHandlers)(a.onPointerEnter, () => {
                  ((r.current = !1), (i.wasEscapeCloseRef.current = !1));
                }),
                onPointerMove: (0, j.composeEventHandlers)(
                  a.onPointerMove,
                  ai(() => {
                    e ||
                      r.current ||
                      i.wasEscapeCloseRef.current ||
                      q.current ||
                      (h.onTriggerEnter(i.value), (q.current = !0));
                  }),
                ),
                onPointerLeave: (0, j.composeEventHandlers)(
                  a.onPointerLeave,
                  ai(() => {
                    e || (h.onTriggerLeave(), (q.current = !1));
                  }),
                ),
                onClick: (0, j.composeEventHandlers)(a.onClick, () => {
                  (h.onItemSelect(i.value), (r.current = s));
                }),
                onKeyDown: (0, j.composeEventHandlers)(a.onKeyDown, (a) => {
                  let b = { horizontal: "ArrowDown", vertical: "rtl" === h.dir ? "ArrowLeft" : "ArrowRight" }[
                    h.orientation
                  ];
                  s && a.key === b && (i.onEntryKeyDown(), a.preventDefault());
                }),
              }),
            }),
          }),
          s &&
            (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(v.Root, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: i.focusProxyRef,
                  onFocus: (a) => {
                    let b = i.contentRef.current,
                      c = a.relatedTarget,
                      d = c === l.current,
                      e = b?.contains(c);
                    (d || !e) && i.onFocusProxyEnter(d ? "start" : "end");
                  },
                }),
                h.viewport && (0, b.jsx)("span", { "aria-owns": p }),
              ],
            }),
        ],
      });
    }).displayName = Q;
    var R = "navigationMenu.linkSelect",
      S = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, active: e, onSelect: f, ...g } = a;
        return (0, b.jsx)(ab, {
          asChild: !0,
          children: (0, b.jsx)(k.Primitive.a, {
            "data-active": e ? "" : void 0,
            "aria-current": e ? "page" : void 0,
            ...g,
            ref: c,
            onClick: (0, j.composeEventHandlers)(
              a.onClick,
              (a) => {
                let b = a.target,
                  c = new CustomEvent(R, { bubbles: !0, cancelable: !0 });
                if (
                  (b.addEventListener(R, (a) => f?.(a), { once: !0 }),
                  (0, k.dispatchDiscreteCustomEvent)(b, c),
                  !c.defaultPrevented && !a.metaKey)
                ) {
                  let a = new CustomEvent(X, { bubbles: !0, cancelable: !0 });
                  (0, k.dispatchDiscreteCustomEvent)(b, a);
                }
              },
              { checkForDefaultPrevented: !1 },
            ),
          }),
        });
      });
    S.displayName = "NavigationMenuLink";
    var T = "NavigationMenuIndicator";
    f.forwardRef((a, c) => {
      let { forceMount: d, ...e } = a,
        f = G(T, a.__scopeNavigationMenu),
        g = !!f.value;
      return f.indicatorTrack
        ? h.default.createPortal(
            (0, b.jsx)(o.Presence, { present: d || g, children: (0, b.jsx)(U, { ...e, ref: c }) }),
            f.indicatorTrack,
          )
        : null;
    }).displayName = T;
    var U = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, ...e } = a,
          g = G(T, d),
          h = y(d),
          [i, j] = f.useState(null),
          [l, m] = f.useState(null),
          n = "horizontal" === g.orientation,
          o = !!g.value;
        f.useEffect(() => {
          let a = h(),
            b = a.find((a) => a.value === g.value)?.ref.current;
          b && j(b);
        }, [h, g.value]);
        let p = () => {
          i && m({ size: n ? i.offsetWidth : i.offsetHeight, offset: n ? i.offsetLeft : i.offsetTop });
        };
        return (
          ae(i, p),
          ae(g.indicatorTrack, p),
          l
            ? (0, b.jsx)(k.Primitive.div, {
                "aria-hidden": !0,
                "data-state": o ? "visible" : "hidden",
                "data-orientation": g.orientation,
                ...e,
                ref: c,
                style: {
                  position: "absolute",
                  ...(n
                    ? { left: 0, width: l.size + "px", transform: `translateX(${l.offset}px)` }
                    : { top: 0, height: l.size + "px", transform: `translateY(${l.offset}px)` }),
                  ...e.style,
                },
              })
            : null
        );
      }),
      V = "NavigationMenuContent";
    f.forwardRef((a, c) => {
      let { forceMount: d, ...e } = a,
        f = G(V, a.__scopeNavigationMenu),
        g = O(V, a.__scopeNavigationMenu),
        h = (0, m.useComposedRefs)(g.contentRef, c),
        i = g.value === f.value,
        k = {
          value: g.value,
          triggerRef: g.triggerRef,
          focusProxyRef: g.focusProxyRef,
          wasEscapeCloseRef: g.wasEscapeCloseRef,
          onContentFocusOutside: g.onContentFocusOutside,
          onRootContentClose: g.onRootContentClose,
          ...e,
        };
      return f.viewport
        ? (0, b.jsx)(W, { forceMount: d, ...k, ref: h })
        : (0, b.jsx)(o.Presence, {
            present: d || i,
            children: (0, b.jsx)(Y, {
              "data-state": af(i),
              ...k,
              ref: h,
              onPointerEnter: (0, j.composeEventHandlers)(a.onPointerEnter, f.onContentEnter),
              onPointerLeave: (0, j.composeEventHandlers)(a.onPointerLeave, ai(f.onContentLeave)),
              style: { pointerEvents: !i && f.isRootMenu ? "none" : void 0, ...k.style },
            }),
          });
    }).displayName = V;
    var W = f.forwardRef((a, b) => {
        let { onViewportContentChange: c, onViewportContentRemove: d } = G(V, a.__scopeNavigationMenu);
        return (
          (0, t.useLayoutEffect)(() => {
            c(a.value, { ref: b, ...a });
          }, [a, b, c]),
          (0, t.useLayoutEffect)(() => () => d(a.value), [a.value, d]),
          null
        );
      }),
      X = "navigationMenu.rootContentDismiss",
      Y = f.forwardRef((a, c) => {
        let {
            __scopeNavigationMenu: d,
            value: e,
            triggerRef: g,
            focusProxyRef: h,
            wasEscapeCloseRef: i,
            onRootContentClose: k,
            onContentFocusOutside: l,
            ...n
          } = a,
          o = G(V, d),
          p = f.useRef(null),
          q = (0, m.useComposedRefs)(p, c),
          s = ag(o.baseId, e),
          t = ah(o.baseId, e),
          u = y(d),
          v = f.useRef(null),
          { onItemDismiss: w } = o;
        f.useEffect(() => {
          let a = p.current;
          if (o.isRootMenu && a) {
            let b = () => {
              (w(), k(), a.contains(document.activeElement) && g.current?.focus());
            };
            return (a.addEventListener(X, b), () => a.removeEventListener(X, b));
          }
        }, [o.isRootMenu, a.value, g, w, k]);
        let x = f.useMemo(() => {
          let a = u().map((a) => a.value);
          "rtl" === o.dir && a.reverse();
          let b = a.indexOf(o.value),
            c = a.indexOf(o.previousValue),
            d = e === o.value,
            f = c === a.indexOf(e);
          if (!d && !f) return v.current;
          let g = (() => {
            if (b !== c) {
              if (d && -1 !== c) return b > c ? "from-end" : "from-start";
              if (f && -1 !== b) return b > c ? "to-start" : "to-end";
            }
            return null;
          })();
          return ((v.current = g), g);
        }, [o.previousValue, o.value, o.dir, u, e]);
        return (0, b.jsx)(_, {
          asChild: !0,
          children: (0, b.jsx)(r.DismissableLayer, {
            id: t,
            "aria-labelledby": s,
            "data-motion": x,
            "data-orientation": o.orientation,
            ...n,
            ref: q,
            disableOutsidePointerEvents: !1,
            onDismiss: () => {
              let a = new Event(X, { bubbles: !0, cancelable: !0 });
              p.current?.dispatchEvent(a);
            },
            onFocusOutside: (0, j.composeEventHandlers)(a.onFocusOutside, (a) => {
              l();
              let b = a.target;
              o.rootNavigationMenu?.contains(b) && a.preventDefault();
            }),
            onPointerDownOutside: (0, j.composeEventHandlers)(a.onPointerDownOutside, (a) => {
              let b = a.target,
                c = u().some((a) => a.ref.current?.contains(b)),
                d = o.isRootMenu && o.viewport?.contains(b);
              (c || d || !o.isRootMenu) && a.preventDefault();
            }),
            onKeyDown: (0, j.composeEventHandlers)(a.onKeyDown, (a) => {
              let b = a.altKey || a.ctrlKey || a.metaKey;
              if ("Tab" === a.key && !b) {
                let b = ac(a.currentTarget),
                  c = document.activeElement,
                  d = b.findIndex((a) => a === c);
                ad(a.shiftKey ? b.slice(0, d).reverse() : b.slice(d + 1, b.length))
                  ? a.preventDefault()
                  : h.current?.focus();
              }
            }),
            onEscapeKeyDown: (0, j.composeEventHandlers)(a.onEscapeKeyDown, (a) => {
              i.current = !0;
            }),
          }),
        });
      }),
      Z = "NavigationMenuViewport";
    f.forwardRef((a, c) => {
      let { forceMount: d, ...e } = a,
        f = !!G(Z, a.__scopeNavigationMenu).value;
      return (0, b.jsx)(o.Presence, { present: d || f, children: (0, b.jsx)($, { ...e, ref: c }) });
    }).displayName = Z;
    var $ = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, children: e, ...g } = a,
          h = G(Z, d),
          i = (0, m.useComposedRefs)(c, h.onViewportChange),
          l = I(V, a.__scopeNavigationMenu),
          [n, p] = f.useState(null),
          [q, r] = f.useState(null),
          s = n ? n?.width + "px" : void 0,
          t = n ? n?.height + "px" : void 0,
          u = !!h.value,
          v = u ? h.value : h.previousValue;
        return (
          ae(q, () => {
            q && p({ width: q.offsetWidth, height: q.offsetHeight });
          }),
          (0, b.jsx)(k.Primitive.div, {
            "data-state": af(u),
            "data-orientation": h.orientation,
            ...g,
            ref: i,
            style: {
              pointerEvents: !u && h.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": s,
              "--radix-navigation-menu-viewport-height": t,
              ...g.style,
            },
            onPointerEnter: (0, j.composeEventHandlers)(a.onPointerEnter, h.onContentEnter),
            onPointerLeave: (0, j.composeEventHandlers)(a.onPointerLeave, ai(h.onContentLeave)),
            children: Array.from(l.items).map(([a, { ref: c, forceMount: d, ...e }]) => {
              let f = v === a;
              return (0, b.jsx)(
                o.Presence,
                {
                  present: d || f,
                  children: (0, b.jsx)(Y, {
                    ...e,
                    ref: (0, m.composeRefs)(c, (a) => {
                      f && a && r(a);
                    }),
                  }),
                },
                a,
              );
            }),
          })
        );
      }),
      _ = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, ...e } = a,
          f = G("FocusGroup", d);
        return (0, b.jsx)(A.Provider, {
          scope: d,
          children: (0, b.jsx)(A.Slot, {
            scope: d,
            children: (0, b.jsx)(k.Primitive.div, { dir: f.dir, ...e, ref: c }),
          }),
        });
      }),
      aa = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
      ab = f.forwardRef((a, c) => {
        let { __scopeNavigationMenu: d, ...e } = a,
          f = B(d),
          g = G("FocusGroupItem", d);
        return (0, b.jsx)(A.ItemSlot, {
          scope: d,
          children: (0, b.jsx)(k.Primitive.button, {
            ...e,
            ref: c,
            onKeyDown: (0, j.composeEventHandlers)(a.onKeyDown, (a) => {
              if (["Home", "End", ...aa].includes(a.key)) {
                let b = f().map((a) => a.ref.current);
                if (
                  (["rtl" === g.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(a.key) && b.reverse(),
                  aa.includes(a.key))
                ) {
                  let c = b.indexOf(a.currentTarget);
                  b = b.slice(c + 1);
                }
                (setTimeout(() => ad(b)), a.preventDefault());
              }
            }),
          }),
        });
      });
    function ac(a) {
      let b = [],
        c = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (a) => {
            let b = "INPUT" === a.tagName && "hidden" === a.type;
            return a.disabled || a.hidden || b
              ? NodeFilter.FILTER_SKIP
              : a.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; c.nextNode(); ) b.push(c.currentNode);
      return b;
    }
    function ad(a) {
      let b = document.activeElement;
      return a.some((a) => a === b || (a.focus(), document.activeElement !== b));
    }
    function ae(a, b) {
      let c = (0, u.useCallbackRef)(b);
      (0, t.useLayoutEffect)(() => {
        let b = 0;
        if (a) {
          let d = new ResizeObserver(() => {
            (cancelAnimationFrame(b), (b = window.requestAnimationFrame(c)));
          });
          return (
            d.observe(a),
            () => {
              (window.cancelAnimationFrame(b), d.unobserve(a));
            }
          );
        }
      }, [a, c]);
    }
    function af(a) {
      return a ? "open" : "closed";
    }
    function ag(a, b) {
      return `${a}-trigger-${b}`;
    }
    function ah(a, b) {
      return `${a}-content-${b}`;
    }
    function ai(a) {
      return (b) => ("mouse" === b.pointerType ? a(b) : void 0);
    }
    (a.i(309173), a.i(341711));
    let aj = Error("Cannot find module '@/lib/utils'");
    throw ((aj.code = "MODULE_NOT_FOUND"), aj);
  },
  898087,
  (a) => {
    "use strict";
    var b = a.i(13795),
      c = a.i(805485),
      d = (a, b, c, d, e, f, g, h) => {
        let i = document.documentElement,
          j = ["light", "dark"];
        function k(b) {
          var c;
          ((Array.isArray(a) ? a : [a]).forEach((a) => {
            let c = "class" === a,
              d = c && f ? e.map((a) => f[a] || a) : e;
            c ? (i.classList.remove(...d), i.classList.add(f && f[b] ? f[b] : b)) : i.setAttribute(a, b);
          }),
            (c = b),
            h && j.includes(c) && (i.style.colorScheme = c));
        }
        if (d) k(d);
        else
          try {
            let a = localStorage.getItem(b) || c,
              d =
                g && "system" === a
                  ? window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
                  : a;
            k(d);
          } catch (a) {}
      },
      e = c.createContext(void 0),
      f = { setTheme: (a) => {}, themes: [] };
    c.memo(
      ({
        forcedTheme: a,
        storageKey: b,
        attribute: e,
        enableSystem: f,
        enableColorScheme: g,
        defaultTheme: h,
        value: i,
        themes: j,
        nonce: k,
        scriptProps: l,
      }) => {
        let m = JSON.stringify([e, b, h, a, j, i, f, g]).slice(1, -1);
        return c.createElement("script", {
          ...l,
          suppressHydrationWarning: !0,
          nonce: k,
          dangerouslySetInnerHTML: { __html: `(${d.toString()})(${m})` },
        });
      },
    );
    var g = a.i(545898);
    let h = ({ ...a }) => {
      var d;
      let { theme: h = "system" } = null != (d = c.useContext(e)) ? d : f;
      return (0, b.jsx)(g.Toaster, {
        theme: h,
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
        ...a,
      });
    };
    a.s(["Toaster", () => h], 898087);
  },
];

//# sourceMappingURL=in-need-of-time_frontend_components_8dfba2fe._.js.map
