/* eslint-disable consistent-return */
/* eslint-disable func-names */
import Vue from 'vue';
import { Subject } from 'rxjs';

window.bus = new Vue({}); // vue

window.subjectBus = new Subject(); // rxjs

subjectBus.subscriptionMap = {};

subjectBus.addSubscribe = function (subKey, next, error = () => {}, compelet = () => {}) {
  if (this.subscriptionMap[subKey]) { // 防止重复订阅
    return;
  } 

  const subscription = this.subscribe(next, error, compelet);
  this.subscriptionMap[subKey] = subscription;

  return subscription;
};

subjectBus.removeSubscription = function (subKey) {
  this.subscriptionMap[subKey].unsubscribe();
  delete this.subscriptionMap[subKey];
};

/*
// 订阅事件

bus.subscribe(nextFn, errorFn ?, compeletFn ?);
bus.subscribe({
    nextFn,
    errorFn,
    compeletFn
})

// 发布事件

bus.next(params)

*/
