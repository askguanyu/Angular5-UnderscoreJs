import { Injectable } from '@angular/core';
import { _ } from 'underscore';

@Injectable()
export class CollectionsService {

  constructor() { }

  /**
   * Iterates over a list of elements, yielding each in turn to an iteratee function. 
   * The iteratee is bound to the context object, if one is passed. 
   * Each invocation of iteratee is called with three arguments: (element, index, list). 
   * If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
   * @param list 
   * @param delegate 
   */
  public each(list: Array<any> | object, delegate: Function): any {
    return _.each(list, delegate);
  }

  /**
   * Produces a new array of values by mapping each value in list through a transformation function (iteratee). 
   * The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
   * @param list 
   * @param delegate 
   */
  public map(list: Array<any> | object, delegate: Function): Array<any> {
    return _.map(list, delegate);
  }

  /**
   * Also known as inject and foldl, reduce boils down a list of values into a single value. 
   * Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. 
   * The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
   * If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. 
   * The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
   * @param list 
   * @param delegate 
   * @param memo 
   */
  public reduce(list: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo == null) {
      return _.reduce(list, delegate);
    }
    return _.reduce(list, delegate, memo);
  }


  /**
   * The right-associative version of reduce.
   * @param array 
   * @param delegate 
   * @param memo 
   */
  public reduceRight(list: Array<any> | object, delegate: Function, memo?: any): any {

    if (memo == null) {
      return _.reduceRight(list, delegate);
    }
    return _.reduceRight(list, delegate, memo);
  }

  /**
   * Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. 
   * The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
   * @param list 
   * @param delegate 
   */
  public find(list: Array<any> | object, delegate: Function): any {
    return _.find(list, delegate);
  }

  /**
   * Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
   * @param list 
   * @param delegate 
   */
  public filter(list: Array<any> | object, delegate: Function): any {
    return _.filter(list, delegate);
  }

  /**
   * Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
   * @param list 
   * @param properties 
   */
  public where<T>(list: Array<T>, properties: any): T[] {
    return _.where(list, properties);
  }

  /**
   * Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
   * If no match is found, or if list is empty, undefined will be returned.
   * @param list 
   * @param properties 
   */
  public findWhere<T>(list: Array<T>, properties: object): T[] {
    return _.findWhere(list, properties);
  }

  /**
   * Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
   * @param list 
   * @param delegate 
   */
  public reject(list: Array<any> | object, delegate: Function): any {
    return _.reject(list, delegate);
  }

  /**
   * Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found.
   * @param list 
   * @param delegate 
   */
  public every(list: Array<any> | object, delegate : Function): boolean {
    return _.every(list, delegate);
  }

  /**
   * Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
   * @param list 
   * @param delegate 
   */
  public some(list: Array<any> | object, delegate : Function): boolean {
    return _.some(list, delegate);
  }

  /**
   * Returns true if the value is present in the list. 
   * Uses indexOf internally, if list is an Array. 
   * Use fromIndex to start your search at a given index.
   * @param list 
   * @param value 
   * @param fromIndex 
   */
  public contains(list: Array<any> | object, value: any, fromIndex?: number): boolean {  
    if (list instanceof Array) {
      if (fromIndex == null) {
        return _.contains(list, value);
      }
      else {
        return _.contains(list, value, fromIndex);
      }
    } 
    else {
      return _.contains(list, value);
    }    
  }

  /**
   * Calls the method named by methodName on each value in the list. 
   * @param list 
   * @param methodName 
   */
  public invoke<T>(list: Array<T>, methodName: string): Array<T> {
    return _.invoke(list, methodName);
  }

  /**
   * A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
   * @param list 
   * @param propertyName 
   */
  public pluck(list: Array<object>, propertyName: string): Array<any> {
    return _.pluck(list, propertyName);
  }

  /**
   * Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. 
   * -Infinity is returned if list is empty, so an isEmpty guard may be required. 
   * Non-numerical values in list will be ignored.
   * @param list 
   * @param delegate 
   */
  public max<T>(list: Array<T>, delegate: Function): T {
    return _.max(list, delegate);
  }

  /**
   *Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. 
   Infinity is returned if list is empty, so an isEmpty guard may be required. 
   Non-numerical values in list will be ignored.
   * @param list 
   * @param delegate 
   */
  public min<T>(list: Array<T>, delegate: Function): T {
    return _.min(list, delegate);
  }

  /**
   * Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. 
   * iteratee may also be the string name of the property to sort by (eg. length).
   * @param list 
   * @param delegate 
   */
  public sortBy<T>(list: Array<T>, delegate: Function): Array<T> {
    return _.sortBy(list, delegate);
  }

  /**
   * Returns a (stably) sorted copy of list, ranked in descending order by the results of running each value through iteratee. 
   * iteratee may also be the string name of the property to sort by (eg. length).
   * @param list 
   * @param delegate 
   */
  public sortByDesc<T>(list: Array<T>, delegate: Function): Array<T> {
    return _.sortBy(list, delegate).reverse();
  }

  /**
   * Splits a collection into sets, grouped by the result of running each value through iteratee. 
   * If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.
   * @param list 
   * @param delegate 
   */
  public groupBy(list: Array<any>, delegate: Function | string): object {
    return _.groupBy(list, delegate);
  }

  /**
   * Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. 
   * Just like groupBy, but for when you know your keys are unique.
   * @param list 
   * @param delegate 
   */
  public indexBy(list: Array<any>, delegate: Function | string): object {
    return _.indexBy(list, delegate);
  }

  /**
   * Sorts a list into groups and returns a count for the number of objects in each group. 
   * Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group.
   * @param list 
   * @param delegate 
   */
  public countBy(list: Array<any>, delegate: Function | string): object {
    return _.countBy(list, delegate);
  }

  /**
   * Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
   * @param list 
   */
  public shuffle(list: Array<any>): Array<any> {
      return _.shuffle(list);
  }

  /**
   * Produce a random sample from the list. Pass a number to return n random elements from the list. 
   * Otherwise a single random item will be returned.
   * @param list 
   * @param count 
   */
  public sample<T>(list: Array<T>, count?: number): Array<T> | T {
    if (count != null && count > 0)
      return _.sample(list,count);
    return _.sample(list);
  }

  /**
   * Creates a real Array from the list (anything that can be iterated over). Useful for transmuting the arguments object.
   * @param object 
   */
  public toArray(object: object): Array<any> {
    return _.toArray(object);
  }

  /**
   * Return the number of values in the list.
   * @param list 
   */
  public size(list: Array<any> | object): number {
    return _.size(list);
  }

  /**
   * Split array into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
   * @param list 
   * @param delegate 
   */
  public partition<T>(list: Array<T>, delegate: Function): Array<Array<T>> {
    return _.partition(list, delegate)
  }

}