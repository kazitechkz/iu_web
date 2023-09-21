import {MonoTypeOperatorFunction, Observable, takeUntil} from "rxjs";
import {assertInInjectionContext, DestroyRef, inject} from "@angular/core";

export function autoUnsubscribe<T>(destroyRef?: DestroyRef): MonoTypeOperatorFunction<T> {
  if (!destroyRef) {
    assertInInjectionContext(autoUnsubscribe);
    destroyRef = inject(DestroyRef);
  }

  const destroyed$ = new Observable<void>(observer => {
    return destroyRef!.onDestroy(observer.next.bind(observer));
  });

  return <T>(source: Observable<T>) => {
    return source.pipe(takeUntil(destroyed$));
  };
}
