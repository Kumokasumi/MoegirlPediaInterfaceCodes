// <pre>
// 基于Chromium 70.0.3538.0版本和截至2022年1月20日 (四) 10:23 (CST)的全站js内容通过由《金融时报》开发的polyfill.io所提供的分析程序分析得来
/* Polyfill service v3.109.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 * 
 * Features requested: Array.from,Array.isArray,Array.prototype.entries,Array.prototype.every,Array.prototype.filter,Array.prototype.find,Array.prototype.forEach,Array.prototype.includes,Array.prototype.indexOf,Array.prototype.keys,Array.prototype.lastIndexOf,Array.prototype.map,Array.prototype.reduce,Array.prototype.sort,Array.prototype.values,ArrayBuffer,ArrayBuffer.isView,Blob,CustomEvent,DataView,Date.now,Date.prototype.toISOString,Float32Array,Float64Array,Function.prototype.bind,Int16Array,Int32Array,Int8Array,IntersectionObserver,JSON,Map,Math.sign,MutationObserver,Number.EPSILON,Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.isInteger,Number.isSafeInteger,Object.assign,Object.entries,Object.freeze,Object.fromEntries,Object.getOwnPropertySymbols,Object.setPrototypeOf,Object.values,Promise,Promise.prototype.finally,RegExp.prototype.flags,Set,String.prototype.codePointAt,String.prototype.normalize,String.prototype.trim,Symbol,Symbol.iterator,Symbol.prototype.description,TextDecoder,URL,URLSearchParams,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,WeakMap,WeakSet,XMLHttpRequest,atob,console,document,fetch,getComputedStyle,globalThis,localStorage,modernizr:es5object,modernizr:es6string,requestAnimationFrame
 * 
 * - _ESAbstract.Call, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep", "_ESAbstract.IteratorNext")
 * - _ESAbstract.CreateDataProperty, License: CC0 (required by "Object.fromEntries", "_ESAbstract.CreateDataPropertyOrThrow")
 * - _ESAbstract.CreateDataPropertyOrThrow, License: CC0 (required by "Object.fromEntries")
 * - _ESAbstract.CreateMethodProperty, License: CC0 (required by "Object.fromEntries")
 * - _ESAbstract.Get, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep", "_ESAbstract.IteratorComplete")
 * - _ESAbstract.IsCallable, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive", "_ESAbstract.OrdinaryToPrimitive")
 * - _ESAbstract.RequireObjectCoercible, License: CC0 (required by "Object.fromEntries")
 * - _ESAbstract.ToBoolean, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep", "_ESAbstract.IteratorComplete")
 * - _ESAbstract.ToObject, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorClose", "_ESAbstract.GetMethod", "_ESAbstract.GetV")
 * - _ESAbstract.GetV, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorClose", "_ESAbstract.GetMethod")
 * - _ESAbstract.GetMethod, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorClose")
 * - _ESAbstract.Type, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep", "_ESAbstract.IteratorComplete")
 * - _ESAbstract.GetIterator, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable")
 * - _ESAbstract.IteratorClose, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable")
 * - _ESAbstract.IteratorComplete, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep")
 * - _ESAbstract.IteratorNext, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable", "_ESAbstract.IteratorStep")
 * - _ESAbstract.IteratorStep, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable")
 * - _ESAbstract.IteratorValue, License: CC0 (required by "Object.fromEntries", "_ESAbstract.AddEntriesFromIterable")
 * - _ESAbstract.AddEntriesFromIterable, License: CC0 (required by "Object.fromEntries")
 * - _ESAbstract.OrdinaryToPrimitive, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToPrimitive")
 * - _ESAbstract.ToPrimitive, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey", "_ESAbstract.ToString")
 * - _ESAbstract.ToString, License: CC0 (required by "Object.fromEntries", "_ESAbstract.ToPropertyKey")
 * - _ESAbstract.ToPropertyKey, License: CC0 (required by "Object.fromEntries")
 * - globalThis, License: MIT
 * - Object.fromEntries, License: CC0
 * 
 * These features were not recognised:
 * - ArrayBuffer.isView */

(function(self, undefined) {

// _ESAbstract.Call
/* global IsCallable */
// 7.3.12. Call ( F, V [ , argumentsList ] )
function Call(F, V /* [, argumentsList] */) { // eslint-disable-line no-unused-vars
    // 1. If argumentsList is not present, set argumentsList to a new empty List.
    var argumentsList = arguments.length > 2 ? arguments[2] : [];
    // 2. If IsCallable(F) is false, throw a TypeError exception.
    if (IsCallable(F) === false) {
        throw new TypeError(Object.prototype.toString.call(F) + 'is not a function.');
    }
    // 3. Return ? F.[[Call]](V, argumentsList).
    return F.apply(V, argumentsList);
}

// _ESAbstract.CreateDataProperty
// 7.3.4. CreateDataProperty ( O, P, V )
// NOTE
// This abstract operation creates a property whose attributes are set to the same defaults used for properties created by the ECMAScript language assignment operator.
// Normally, the property will not already exist. If it does exist and is not configurable or if O is not extensible, [[DefineOwnProperty]] will return false.
function CreateDataProperty(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{ [[Value]]: V, [[Writable]]: true, [[Enumerable]]: true, [[Configurable]]: true }.
    var newDesc = {
        value: V,
        writable: true,
        enumerable: true,
        configurable: true
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    try {
        Object.defineProperty(O, P, newDesc);
        return true;
    } catch (e) {
        return false;
    }
}

// _ESAbstract.CreateDataPropertyOrThrow
/* global CreateDataProperty */
// 7.3.6. CreateDataPropertyOrThrow ( O, P, V )
function CreateDataPropertyOrThrow(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let success be ? CreateDataProperty(O, P, V).
    var success = CreateDataProperty(O, P, V);
    // 4. If success is false, throw a TypeError exception.
    if (!success) {
        throw new TypeError('Cannot assign value `' + Object.prototype.toString.call(V) + '` to property `' + Object.prototype.toString.call(P) + '` on object `' + Object.prototype.toString.call(O) + '`');
    }
    // 5. Return success.
    return success;
}

// _ESAbstract.CreateMethodProperty
// 7.3.5. CreateMethodProperty ( O, P, V )
function CreateMethodProperty(O, P, V) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Let newDesc be the PropertyDescriptor{[[Value]]: V, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true}.
    var newDesc = {
        value: V,
        writable: true,
        enumerable: false,
        configurable: true
    };
    // 4. Return ? O.[[DefineOwnProperty]](P, newDesc).
    Object.defineProperty(O, P, newDesc);
}

// _ESAbstract.Get
// 7.3.1. Get ( O, P )
function Get(O, P) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: IsPropertyKey(P) is true.
    // 3. Return ? O.[[Get]](P, O).
    return O[P];
}

// _ESAbstract.IsCallable
// 7.2.3. IsCallable ( argument )
function IsCallable(argument) { // eslint-disable-line no-unused-vars
    // 1. If Type(argument) is not Object, return false.
    // 2. If argument has a [[Call]] internal method, return true.
    // 3. Return false.

    // Polyfill.io - Only function objects have a [[Call]] internal method. This means we can simplify this function to check that the argument has a type of function.
    return typeof argument === 'function';
}

// _ESAbstract.RequireObjectCoercible
// 7.2.1. RequireObjectCoercible ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return argument.                                                                                                                   |
| Number        | Return argument.                                                                                                                   |
| String        | Return argument.                                                                                                                   |
| Symbol        | Return argument.                                                                                                                   |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function RequireObjectCoercible(argument) { // eslint-disable-line no-unused-vars
    if (argument === null || argument === undefined) {
        throw TypeError(Object.prototype.toString.call(argument) + ' is not coercible to Object.');
    }
    return argument;
}

// _ESAbstract.ToBoolean
// 7.1.2. ToBoolean ( argument )
// The abstract operation ToBoolean converts argument to a value of type Boolean according to Table 9:
/*
--------------------------------------------------------------------------------------------------------------
| Argument Type | Result                                                                                     |
--------------------------------------------------------------------------------------------------------------
| Undefined     | Return false.                                                                              |
| Null          | Return false.                                                                              |
| Boolean       | Return argument.                                                                           |
| Number        | If argument is +0, -0, or NaN, return false; otherwise return true.                        |
| String        | If argument is the empty String (its length is zero), return false; otherwise return true. |
| Symbol        | Return true.                                                                               |
| Object        | Return true.                                                                               |
--------------------------------------------------------------------------------------------------------------
*/
function ToBoolean(argument) { // eslint-disable-line no-unused-vars
    return Boolean(argument);
}

// _ESAbstract.ToObject
// 7.1.13 ToObject ( argument )
// The abstract operation ToObject converts argument to a value of type Object according to Table 12:
// Table 12: ToObject Conversions
/*
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Argument Type | Result                                                                                                                             |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Undefined     | Throw a TypeError exception.                                                                                                       |
| Null          | Throw a TypeError exception.                                                                                                       |
| Boolean       | Return a new Boolean object whose [[BooleanData]] internal slot is set to argument. See 19.3 for a description of Boolean objects. |
| Number        | Return a new Number object whose [[NumberData]] internal slot is set to argument. See 20.1 for a description of Number objects.    |
| String        | Return a new String object whose [[StringData]] internal slot is set to argument. See 21.1 for a description of String objects.    |
| Symbol        | Return a new Symbol object whose [[SymbolData]] internal slot is set to argument. See 19.4 for a description of Symbol objects.    |
| Object        | Return argument.                                                                                                                   |
|----------------------------------------------------------------------------------------------------------------------------------------------------|
*/
function ToObject(argument) { // eslint-disable-line no-unused-vars
    if (argument === null || argument === undefined) {
        throw TypeError();
    }
    return Object(argument);
}

// _ESAbstract.GetV
/* global ToObject */
// 7.3.2 GetV (V, P)
function GetV(v, p) { // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let O be ? ToObject(V).
    var o = ToObject(v);
    // 3. Return ? O.[[Get]](P, V).
    return o[p];
}

// _ESAbstract.GetMethod
/* global GetV, IsCallable */
// 7.3.9. GetMethod ( V, P )
function GetMethod(V, P) { // eslint-disable-line no-unused-vars
    // 1. Assert: IsPropertyKey(P) is true.
    // 2. Let func be ? GetV(V, P).
    var func = GetV(V, P);
    // 3. If func is either undefined or null, return undefined.
    if (func === null || func === undefined) {
        return undefined;
    }
    // 4. If IsCallable(func) is false, throw a TypeError exception.
    if (IsCallable(func) === false) {
        throw new TypeError('Method not callable: ' + P);
    }
    // 5. Return func.
    return func;
}

// _ESAbstract.Type
// "Type(x)" is used as shorthand for "the type of x"...
function Type(x) { // eslint-disable-line no-unused-vars
    switch (typeof x) {
        case 'undefined':
            return 'undefined';
        case 'boolean':
            return 'boolean';
        case 'number':
            return 'number';
        case 'string':
            return 'string';
        case 'symbol':
            return 'symbol';
        default:
            // typeof null is 'object'
            if (x === null) return 'null';
            // Polyfill.io - This is here because a Symbol polyfill will have a typeof `object`.
            if ('Symbol' in self && (x instanceof self.Symbol || x.constructor === self.Symbol)) return 'symbol';

            return 'object';
    }
}

// _ESAbstract.GetIterator
/* global GetMethod, Symbol, Call, Type, GetV */
// 7.4.1. GetIterator ( obj [ , method ] )
// The abstract operation GetIterator with argument obj and optional argument method performs the following steps:
function GetIterator(obj /*, method */) { // eslint-disable-line no-unused-vars
    // 1. If method is not present, then
        // a. Set method to ? GetMethod(obj, @@iterator).
    var method = arguments.length > 1 ? arguments[1] : GetMethod(obj, Symbol.iterator);
    // 2. Let iterator be ? Call(method, obj).
    var iterator = Call(method, obj);
    // 3. If Type(iterator) is not Object, throw a TypeError exception.
    if (Type(iterator) !== 'object') {
        throw new TypeError('bad iterator');
    }
    // 4. Let nextMethod be ? GetV(iterator, "next").
    var nextMethod = GetV(iterator, "next");
    // 5. Let iteratorRecord be Record {[[Iterator]]: iterator, [[NextMethod]]: nextMethod, [[Done]]: false}.
    var iteratorRecord = Object.create(null);
    iteratorRecord['[[Iterator]]'] = iterator;
    iteratorRecord['[[NextMethod]]'] = nextMethod;
    iteratorRecord['[[Done]]'] = false;
    // 6. Return iteratorRecord.
    return iteratorRecord;
}

// _ESAbstract.IteratorClose
/* global GetMethod, Type, Call */
// 7.4.6. IteratorClose ( iteratorRecord, completion )
function IteratorClose(iteratorRecord, completion) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iteratorRecord.[[Iterator]]) is Object.
    if (Type(iteratorRecord['[[Iterator]]']) !== 'object') {
        throw new Error(Object.prototype.toString.call(iteratorRecord['[[Iterator]]']) + 'is not an Object.');
    }
    // 2. Assert: completion is a Completion Record.
    // Polyfill.io - Ignoring this step as there is no way to check if something is a Completion Record in userland JavaScript.

    // 3. Let iterator be iteratorRecord.[[Iterator]].
    var iterator = iteratorRecord['[[Iterator]]'];
    // 4. Let return be ? GetMethod(iterator, "return").
    // Polyfill.io - We name it  returnMethod because return is a keyword and can not be used as an identifier (E.G. variable name, function name etc).
    var returnMethod = GetMethod(iterator, "return");
    // 5. If return is undefined, return Completion(completion).
    if (returnMethod === undefined) {
        return completion;
    }
    // 6. Let innerResult be Call(return, iterator, « »).
    try {
        var innerResult = Call(returnMethod, iterator);
    } catch (error) {
        var innerException = error;
    }
    // 7. If completion.[[Type]] is throw, return Completion(completion).
    if (completion) {
        return completion;
    }
    // 8. If innerResult.[[Type]] is throw, return Completion(innerResult).
    if (innerException) {
        throw innerException;
    }
    // 9. If Type(innerResult.[[Value]]) is not Object, throw a TypeError exception.
    if (Type(innerResult) !== 'object') {
        throw new TypeError("Iterator's return method returned a non-object.");
    }
    // 10. Return Completion(completion).
    return completion;
}

// _ESAbstract.IteratorComplete
/* global Type, ToBoolean, Get */
// 7.4.3 IteratorComplete ( iterResult )
function IteratorComplete(iterResult) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== 'object') {
        throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
    }
    // 2. Return ToBoolean(? Get(iterResult, "done")).
    return ToBoolean(Get(iterResult, "done"));
}

// _ESAbstract.IteratorNext
/* global Call, Type */
// 7.4.2. IteratorNext ( iteratorRecord [ , value ] )
function IteratorNext(iteratorRecord /* [, value] */) { // eslint-disable-line no-unused-vars
    // 1. If value is not present, then
    if (arguments.length < 2) {
        // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « »).
        var result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']);
    // 2. Else,
    } else {
        // a. Let result be ? Call(iteratorRecord.[[NextMethod]], iteratorRecord.[[Iterator]], « value »).
        result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]);
    }
    // 3. If Type(result) is not Object, throw a TypeError exception.
    if (Type(result) !== 'object') {
        throw new TypeError('bad iterator');
    }
    // 4. Return result.
    return result;
}

// _ESAbstract.IteratorStep
/* global IteratorNext, IteratorComplete */
// 7.4.5. IteratorStep ( iteratorRecord )
function IteratorStep(iteratorRecord) { // eslint-disable-line no-unused-vars
    // 1. Let result be ? IteratorNext(iteratorRecord).
    var result = IteratorNext(iteratorRecord);
    // 2. Let done be ? IteratorComplete(result).
    var done = IteratorComplete(result);
    // 3. If done is true, return false.
    if (done === true) {
        return false;
    }
    // 4. Return result.
    return result;
}

// _ESAbstract.IteratorValue
/* global Type, Get */
// 7.4.4 IteratorValue ( iterResult )
function IteratorValue(iterResult) { // eslint-disable-line no-unused-vars
    // Assert: Type(iterResult) is Object.
    if (Type(iterResult) !== 'object') {
        throw new Error(Object.prototype.toString.call(iterResult) + 'is not an Object.');
    }
    // Return ? Get(iterResult, "value").
    return Get(iterResult, "value");
}

// _ESAbstract.AddEntriesFromIterable
/* global IsCallable, GetIterator, IteratorStep, IteratorValue, IteratorClose, Get, Call, Type */
// eslint-disable-next-line no-unused-vars
var AddEntriesFromIterable = (function() {
    var toString = {}.toString;
    var split = "".split;
    // 23.1.1.2 AddEntriesFromIterable ( target, iterable, adder )
    return function AddEntriesFromIterable(target, iterable, adder) {
        // 1. If IsCallable(adder) is false, throw a TypeError exception.
        if (IsCallable(adder) === false) {
            throw new TypeError("adder is not callable.");
        }
        // 2. Assert: iterable is present, and is neither undefined nor null.
        // 3. Let iteratorRecord be ? GetIterator(iterable).
        var iteratorRecord = GetIterator(iterable);
        // 4. Repeat,
        // eslint-disable-next-line no-constant-condition
        while (true) {
            // a. Let next be ? IteratorStep(iteratorRecord).
            var next = IteratorStep(iteratorRecord);
            // b. If next is false, return target.
            if (next === false) {
                return target;
            }
            // c. Let nextItem be ? IteratorValue(next).
            var nextItem = IteratorValue(next);
            // d. If Type(nextItem) is not Object, then
            if (Type(nextItem) !== "object") {
                // i. Let error be ThrowCompletion(a newly created TypeError object).
                var error = new TypeError("nextItem is not an object");
                // ii. Return ? IteratorClose(iteratorRecord, error).
                IteratorClose(iteratorRecord, error);
                throw error;
            }
            // Polyfill.io fallback for non-array-like strings which exist in some ES3 user-agents (IE 8)
            nextItem =
                (Type(nextItem) === "string" || nextItem instanceof String) &&
                toString.call(nextItem) == "[object String]"
                    ? split.call(nextItem, "")
                    : nextItem;
            var k;
            try {
                // e. Let k be Get(nextItem, "0").
                k = Get(nextItem, "0");
                // eslint-disable-next-line no-catch-shadow
            } catch (k) {
                // f. If k is an abrupt completion, return ? IteratorClose(iteratorRecord, k).
                return IteratorClose(iteratorRecord, k);
            }
            var v;
            try {
                // g. Let v be Get(nextItem, "1").
                v = Get(nextItem, "1");
                // eslint-disable-next-line no-catch-shadow
            } catch (v) {
                // h. If v is an abrupt completion, return ? IteratorClose(iteratorRecord, v).
                return IteratorClose(iteratorRecord, v);
            }
            try {
                // i. Let status be Call(adder, target, « k.[[Value]], v.[[Value]] »).
                Call(adder, target, [k, v]);
                // eslint-disable-next-line no-catch-shadow
            } catch (status) {
                // j. If status is an abrupt completion, return ? IteratorClose(iteratorRecord, status).
                return IteratorClose(iteratorRecord, status);
            }
        }
    };
})();

// _ESAbstract.OrdinaryToPrimitive
/* global Get, IsCallable, Call, Type */
// 7.1.1.1. OrdinaryToPrimitive ( O, hint )
function OrdinaryToPrimitive(O, hint) { // eslint-disable-line no-unused-vars
    // 1. Assert: Type(O) is Object.
    // 2. Assert: Type(hint) is String and its value is either "string" or "number".
    // 3. If hint is "string", then
    if (hint === 'string') {
        // a. Let methodNames be « "toString", "valueOf" ».
        var methodNames = ['toString', 'valueOf'];
        // 4. Else,
    } else {
        // a. Let methodNames be « "valueOf", "toString" ».
        methodNames = ['valueOf', 'toString'];
    }
    // 5. For each name in methodNames in List order, do
    for (var i = 0; i < methodNames.length; ++i) {
        var name = methodNames[i];
        // a. Let method be ? Get(O, name).
        var method = Get(O, name);
        // b. If IsCallable(method) is true, then
        if (IsCallable(method)) {
            // i. Let result be ? Call(method, O).
            var result = Call(method, O);
            // ii. If Type(result) is not Object, return result.
            if (Type(result) !== 'object') {
                return result;
            }
        }
    }
    // 6. Throw a TypeError exception.
    throw new TypeError('Cannot convert to primitive.');
}

// _ESAbstract.ToPrimitive
/* global Type, GetMethod, Call, OrdinaryToPrimitive */
// 7.1.1. ToPrimitive ( input [ , PreferredType ] )
function ToPrimitive(input /* [, PreferredType] */) { // eslint-disable-line no-unused-vars
    var PreferredType = arguments.length > 1 ? arguments[1] : undefined;
    // 1. Assert: input is an ECMAScript language value.
    // 2. If Type(input) is Object, then
    if (Type(input) === 'object') {
        // a. If PreferredType is not present, let hint be "default".
        if (arguments.length < 2) {
            var hint = 'default';
            // b. Else if PreferredType is hint String, let hint be "string".
        } else if (PreferredType === String) {
            hint = 'string';
            // c. Else PreferredType is hint Number, let hint be "number".
        } else if (PreferredType === Number) {
            hint = 'number';
        }
        // d. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
        var exoticToPrim = typeof self.Symbol === 'function' && typeof self.Symbol.toPrimitive === 'symbol' ? GetMethod(input, self.Symbol.toPrimitive) : undefined;
        // e. If exoticToPrim is not undefined, then
        if (exoticToPrim !== undefined) {
            // i. Let result be ? Call(exoticToPrim, input, « hint »).
            var result = Call(exoticToPrim, input, [hint]);
            // ii. If Type(result) is not Object, return result.
            if (Type(result) !== 'object') {
                return result;
            }
            // iii. Throw a TypeError exception.
            throw new TypeError('Cannot convert exotic object to primitive.');
        }
        // f. If hint is "default", set hint to "number".
        if (hint === 'default') {
            hint = 'number';
        }
        // g. Return ? OrdinaryToPrimitive(input, hint).
        return OrdinaryToPrimitive(input, hint);
    }
    // 3. Return input
    return input;
}

// _ESAbstract.ToString
/* global Type, ToPrimitive */
// 7.1.12. ToString ( argument )
// The abstract operation ToString converts argument to a value of type String according to Table 11:
// Table 11: ToString Conversions
/*
|---------------|--------------------------------------------------------|
| Argument Type | Result                                                 |
|---------------|--------------------------------------------------------|
| Undefined     | Return "undefined".                                    |
|---------------|--------------------------------------------------------|
| Null            | Return "null".                                         |
|---------------|--------------------------------------------------------|
| Boolean       | If argument is true, return "true".                    |
|               | If argument is false, return "false".                  |
|---------------|--------------------------------------------------------|
| Number        | Return NumberToString(argument).                       |
|---------------|--------------------------------------------------------|
| String        | Return argument.                                       |
|---------------|--------------------------------------------------------|
| Symbol        | Throw a TypeError exception.                           |
|---------------|--------------------------------------------------------|
| Object        | Apply the following steps:                             |
|               | Let primValue be ? ToPrimitive(argument, hint String). |
|               | Return ? ToString(primValue).                          |
|---------------|--------------------------------------------------------|
*/
function ToString(argument) { // eslint-disable-line no-unused-vars
    switch(Type(argument)) {
        case 'symbol':
            throw new TypeError('Cannot convert a Symbol value to a string');
        case 'object':
            var primValue = ToPrimitive(argument, String);
            return ToString(primValue); // eslint-disable-line no-unused-vars
        default:
            return String(argument);
    }
}

// _ESAbstract.ToPropertyKey
/* globals ToPrimitive, Type, ToString */
// 7.1.14. ToPropertyKey ( argument )
function ToPropertyKey(argument) { // eslint-disable-line no-unused-vars
    // 1. Let key be ? ToPrimitive(argument, hint String).
    var key = ToPrimitive(argument, String);
    // 2. If Type(key) is Symbol, then
    if (Type(key) === 'symbol') {
        // a. Return key.
        return key;
    }
    // 3. Return ! ToString(key).
    return ToString(key);
}

// globalThis
// 18.1.1 globalThis
(function() {

    /*
        polyfill.io - This code ensures that the referenced object is not an
        object which is not infact the global object. This is needed because
        the Firefox Content Script environment does some funky stuff
        such as creating a frozen `self` global object which is not the same
        `self` global object that is used in browser environments.
        https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/Guides/Content_Scripts/self

        As well as the above, Firefox Content Scripts run in a secure sandbox
        which returns `[object Opaque]` when accessing globals such as Object
        instead of the actual global Object object.
        https://developer.mozilla.org/en-US/docs/Mozilla/Tech/Xray_vision#Xrays_for_JavaScript_objects
    */
    function isNotFirefoxContentScriptEnviroment(root) {
        return root && root.Object == Object && root;
    }

    var freeGlobalThis = isNotFirefoxContentScriptEnviroment(
        typeof globalThis == "object" && globalThis
    );
    var freeWindow = isNotFirefoxContentScriptEnviroment(
        typeof window == "object" && window
    );
    var freeSelf = isNotFirefoxContentScriptEnviroment(
        typeof self == "object" && self
    );
    var freeGlobal = isNotFirefoxContentScriptEnviroment(
        typeof global == "object" && global // eslint-disable-line no-undef
    );

    var globalThis =
        // Modern browsers which already have globalThis but are running this polyfill anyway.
        freeGlobalThis ||
        // All browsers which are running the polyfill in their main thread.
        freeWindow ||
        // All browsers which are running the polyfill in a Worker environment such as Web Workers or Service Workers.
        freeSelf ||
        // NodeJS
        freeGlobal ||
        // Everything else so long as they are not running with a Content Security Policy which forbids using `Function`.
        // If you reach here and have CSP forbidding `Function`, please open an issue on https://github.com/Financial-Times/polyfill-library
        Function("return this")();

    // Export the object
    try {
        Object.defineProperty(globalThis, "globalThis", {
            configurable: true,
            enumerable: false,
            writable: true,
            value: globalThis
        });
    } catch (e) {
        // IE8 throws an error here if we set enumerable to false.
        // More info on table 2: https://msdn.microsoft.com/en-us/library/dd229916(v=vs.85).aspx
        globalThis.globalThis = globalThis;
    }
})();

// Object.fromEntries
/* global CreateMethodProperty, RequireObjectCoercible, ToPropertyKey, CreateDataPropertyOrThrow, AddEntriesFromIterable */

// 19.1.2.5 Object.fromEntries ( iterable )
CreateMethodProperty(Object, 'fromEntries', function fromEntries(iterable) {
    // 1. Perform ? RequireObjectCoercible(iterable).
    RequireObjectCoercible(iterable);
    // 2. Let obj be ObjectCreate(%ObjectPrototype%).
    var obj = {};
    // 3. Assert: obj is an extensible ordinary object with no own properties.
    // 4. Let stepsDefine be the algorithm steps defined in CreateDataPropertyOnObject Functions.
    // 5. Let adder be CreateBuiltinFunction(stepsDefine, « »).
    var adder = function (key, value) {
        // Let O be the this value.
        var O = this;
        // Assert: Type(O) is Object.
        // Assert: O is an extensible ordinary object.
        // Let propertyKey be ? ToPropertyKey(key).
        var propertyKey = ToPropertyKey(key);
        // Perform ! CreateDataPropertyOrThrow(O, propertyKey, value).
        CreateDataPropertyOrThrow(O, propertyKey, value);
    };
    // 6. Return ? AddEntriesFromIterable(obj, iterable, adder).
    return AddEntriesFromIterable(obj, iterable, adder);
});
})
('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
// </pre>