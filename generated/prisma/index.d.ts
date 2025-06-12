
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model variant
 * 
 */
export type variant = $Result.DefaultSelection<Prisma.$variantPayload>
/**
 * Model variantimage
 * 
 */
export type variantimage = $Result.DefaultSelection<Prisma.$variantimagePayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model cartItem
 * 
 */
export type cartItem = $Result.DefaultSelection<Prisma.$cartItemPayload>
/**
 * Model address
 * 
 */
export type address = $Result.DefaultSelection<Prisma.$addressPayload>
/**
 * Model order
 * 
 */
export type order = $Result.DefaultSelection<Prisma.$orderPayload>
/**
 * Model orderItem
 * 
 */
export type orderItem = $Result.DefaultSelection<Prisma.$orderItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AddressType: {
  BILLING: 'BILLING',
  DELIVERY: 'DELIVERY'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]


export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.variantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variantimage`: Exposes CRUD operations for the **variantimage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variantimages
    * const variantimages = await prisma.variantimage.findMany()
    * ```
    */
  get variantimage(): Prisma.variantimageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **cartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.cartItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.addressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.orderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **orderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.orderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    product: 'product',
    variant: 'variant',
    variantimage: 'variantimage',
    category: 'category',
    cart: 'cart',
    cartItem: 'cartItem',
    address: 'address',
    order: 'order',
    orderItem: 'orderItem',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "variant" | "variantimage" | "category" | "cart" | "cartItem" | "address" | "order" | "orderItem" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      variant: {
        payload: Prisma.$variantPayload<ExtArgs>
        fields: Prisma.variantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          findFirst: {
            args: Prisma.variantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          findMany: {
            args: Prisma.variantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>[]
          }
          create: {
            args: Prisma.variantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          createMany: {
            args: Prisma.variantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.variantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>[]
          }
          delete: {
            args: Prisma.variantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          update: {
            args: Prisma.variantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          deleteMany: {
            args: Prisma.variantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.variantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>[]
          }
          upsert: {
            args: Prisma.variantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.variantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.variantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      variantimage: {
        payload: Prisma.$variantimagePayload<ExtArgs>
        fields: Prisma.variantimageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.variantimageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.variantimageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          findFirst: {
            args: Prisma.variantimageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.variantimageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          findMany: {
            args: Prisma.variantimageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>[]
          }
          create: {
            args: Prisma.variantimageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          createMany: {
            args: Prisma.variantimageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.variantimageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>[]
          }
          delete: {
            args: Prisma.variantimageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          update: {
            args: Prisma.variantimageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          deleteMany: {
            args: Prisma.variantimageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.variantimageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.variantimageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>[]
          }
          upsert: {
            args: Prisma.variantimageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$variantimagePayload>
          }
          aggregate: {
            args: Prisma.VariantimageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariantimage>
          }
          groupBy: {
            args: Prisma.variantimageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantimageGroupByOutputType>[]
          }
          count: {
            args: Prisma.variantimageCountArgs<ExtArgs>
            result: $Utils.Optional<VariantimageCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      cartItem: {
        payload: Prisma.$cartItemPayload<ExtArgs>
        fields: Prisma.cartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          findFirst: {
            args: Prisma.cartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          findMany: {
            args: Prisma.cartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>[]
          }
          create: {
            args: Prisma.cartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          createMany: {
            args: Prisma.cartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>[]
          }
          delete: {
            args: Prisma.cartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          update: {
            args: Prisma.cartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          deleteMany: {
            args: Prisma.cartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>[]
          }
          upsert: {
            args: Prisma.cartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.cartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      address: {
        payload: Prisma.$addressPayload<ExtArgs>
        fields: Prisma.addressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findFirst: {
            args: Prisma.addressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          findMany: {
            args: Prisma.addressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          create: {
            args: Prisma.addressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          createMany: {
            args: Prisma.addressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          delete: {
            args: Prisma.addressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          update: {
            args: Prisma.addressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          deleteMany: {
            args: Prisma.addressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>[]
          }
          upsert: {
            args: Prisma.addressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.addressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      order: {
        payload: Prisma.$orderPayload<ExtArgs>
        fields: Prisma.orderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findFirst: {
            args: Prisma.orderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          findMany: {
            args: Prisma.orderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          create: {
            args: Prisma.orderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          createMany: {
            args: Prisma.orderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          delete: {
            args: Prisma.orderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          update: {
            args: Prisma.orderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          deleteMany: {
            args: Prisma.orderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>[]
          }
          upsert: {
            args: Prisma.orderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.orderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      orderItem: {
        payload: Prisma.$orderItemPayload<ExtArgs>
        fields: Prisma.orderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.orderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.orderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findFirst: {
            args: Prisma.orderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.orderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          findMany: {
            args: Prisma.orderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          create: {
            args: Prisma.orderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          createMany: {
            args: Prisma.orderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.orderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          delete: {
            args: Prisma.orderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          update: {
            args: Prisma.orderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          deleteMany: {
            args: Prisma.orderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.orderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.orderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>[]
          }
          upsert: {
            args: Prisma.orderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$orderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.orderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.orderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    product?: productOmit
    variant?: variantOmit
    variantimage?: variantimageOmit
    category?: categoryOmit
    cart?: cartOmit
    cartItem?: cartItemOmit
    address?: addressOmit
    order?: orderOmit
    orderItem?: orderItemOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number
    cart: number
    address: number
    orders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UserCountOutputTypeCountProductsArgs
    cart?: boolean | UserCountOutputTypeCountCartArgs
    address?: boolean | UserCountOutputTypeCountAddressArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    categories: number
    variants: number
    cartItem: number
    order: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ProductCountOutputTypeCountCategoriesArgs
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
    cartItem?: boolean | ProductCountOutputTypeCountCartItemArgs
    order?: boolean | ProductCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Count Type VariantCountOutputType
   */

  export type VariantCountOutputType = {
    images: number
    cartItem: number
    orderItems: number
  }

  export type VariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | VariantCountOutputTypeCountImagesArgs
    cartItem?: boolean | VariantCountOutputTypeCountCartItemArgs
    orderItems?: boolean | VariantCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariantCountOutputType
     */
    select?: VariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantimageWhereInput
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
  }

  /**
   * VariantCountOutputType without action
   */
  export type VariantCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    subcategories: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | CategoryCountOutputTypeCountSubcategoriesArgs
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    email: string | null
    password: string | null
    profile: string | null
    role: $Enums.Role | null
    otp: string | null
    otpExpiry: Date | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    email: string | null
    password: string | null
    profile: string | null
    role: $Enums.Role | null
    otp: string | null
    otpExpiry: Date | null
    resetToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    age: number
    email: number
    password: number
    profile: number
    role: number
    otp: number
    otpExpiry: number
    resetToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    password?: true
    profile?: true
    role?: true
    otp?: true
    otpExpiry?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    password?: true
    profile?: true
    role?: true
    otp?: true
    otpExpiry?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    password?: true
    profile?: true
    role?: true
    otp?: true
    otpExpiry?: true
    resetToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    age: number | null
    email: string
    password: string
    profile: string
    role: $Enums.Role
    otp: string | null
    otpExpiry: Date | null
    resetToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean
    role?: boolean
    otp?: boolean
    otpExpiry?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | user$productsArgs<ExtArgs>
    cart?: boolean | user$cartArgs<ExtArgs>
    address?: boolean | user$addressArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean
    role?: boolean
    otp?: boolean
    otpExpiry?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean
    role?: boolean
    otp?: boolean
    otpExpiry?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    password?: boolean
    profile?: boolean
    role?: boolean
    otp?: boolean
    otpExpiry?: boolean
    resetToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "email" | "password" | "profile" | "role" | "otp" | "otpExpiry" | "resetToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | user$productsArgs<ExtArgs>
    cart?: boolean | user$cartArgs<ExtArgs>
    address?: boolean | user$addressArgs<ExtArgs>
    orders?: boolean | user$ordersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      products: Prisma.$productPayload<ExtArgs>[]
      cart: Prisma.$cartPayload<ExtArgs>[]
      address: Prisma.$addressPayload<ExtArgs>[]
      orders: Prisma.$orderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number | null
      email: string
      password: string
      profile: string
      role: $Enums.Role
      otp: string | null
      otpExpiry: Date | null
      resetToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends user$productsArgs<ExtArgs> = {}>(args?: Subset<T, user$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends user$cartArgs<ExtArgs> = {}>(args?: Subset<T, user$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    address<T extends user$addressArgs<ExtArgs> = {}>(args?: Subset<T, user$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends user$ordersArgs<ExtArgs> = {}>(args?: Subset<T, user$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly age: FieldRef<"user", 'Int'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly profile: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
    readonly otp: FieldRef<"user", 'String'>
    readonly otpExpiry: FieldRef<"user", 'DateTime'>
    readonly resetToken: FieldRef<"user", 'String'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
    readonly updatedAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.products
   */
  export type user$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * user.cart
   */
  export type user$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    where?: cartWhereInput
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    cursor?: cartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * user.address
   */
  export type user$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    where?: addressWhereInput
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    cursor?: addressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * user.orders
   */
  export type user$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    where?: orderWhereInput
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    cursor?: orderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    userId: number | null
    stock: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    userId: number | null
    stock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    image: string | null
    userId: number | null
    stock: number | null
    is_new_arrival: boolean | null
    is_active: boolean | null
    slug: string | null
    description: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    image: string | null
    userId: number | null
    stock: number | null
    is_new_arrival: boolean | null
    is_active: boolean | null
    slug: string | null
    description: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    price: number
    image: number
    userId: number
    stock: number
    is_new_arrival: number
    is_active: number
    tag: number
    slug: number
    description: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    userId?: true
    stock?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    userId?: true
    stock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    userId?: true
    stock?: true
    is_new_arrival?: true
    is_active?: true
    slug?: true
    description?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    userId?: true
    stock?: true
    is_new_arrival?: true
    is_active?: true
    slug?: true
    description?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    image?: true
    userId?: true
    stock?: true
    is_new_arrival?: true
    is_active?: true
    tag?: true
    slug?: true
    description?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    price: number
    image: string | null
    userId: number
    stock: number
    is_new_arrival: boolean
    is_active: boolean
    tag: string[]
    slug: string
    description: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    userId?: boolean
    stock?: boolean
    is_new_arrival?: boolean
    is_active?: boolean
    tag?: boolean
    slug?: boolean
    description?: boolean
    categories?: boolean | product$categoriesArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    variants?: boolean | product$variantsArgs<ExtArgs>
    cartItem?: boolean | product$cartItemArgs<ExtArgs>
    order?: boolean | product$orderArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    userId?: boolean
    stock?: boolean
    is_new_arrival?: boolean
    is_active?: boolean
    tag?: boolean
    slug?: boolean
    description?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    userId?: boolean
    stock?: boolean
    is_new_arrival?: boolean
    is_active?: boolean
    tag?: boolean
    slug?: boolean
    description?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    image?: boolean
    userId?: boolean
    stock?: boolean
    is_new_arrival?: boolean
    is_active?: boolean
    tag?: boolean
    slug?: boolean
    description?: boolean
  }

  export type productOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "image" | "userId" | "stock" | "is_new_arrival" | "is_active" | "tag" | "slug" | "description", ExtArgs["result"]["product"]>
  export type productInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | product$categoriesArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    variants?: boolean | product$variantsArgs<ExtArgs>
    cartItem?: boolean | product$cartItemArgs<ExtArgs>
    order?: boolean | product$orderArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type productIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {
      categories: Prisma.$categoryPayload<ExtArgs>[]
      user: Prisma.$userPayload<ExtArgs>
      variants: Prisma.$variantPayload<ExtArgs>[]
      cartItem: Prisma.$cartItemPayload<ExtArgs>[]
      order: Prisma.$orderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      image: string | null
      userId: number
      stock: number
      is_new_arrival: boolean
      is_active: boolean
      tag: string[]
      slug: string
      description: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productUpdateManyAndReturnArgs>(args: SelectSubset<T, productUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends product$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, product$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItem<T extends product$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, product$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order<T extends product$orderArgs<ExtArgs> = {}>(args?: Subset<T, product$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product model
   */
  interface productFieldRefs {
    readonly id: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly price: FieldRef<"product", 'Float'>
    readonly image: FieldRef<"product", 'String'>
    readonly userId: FieldRef<"product", 'Int'>
    readonly stock: FieldRef<"product", 'Int'>
    readonly is_new_arrival: FieldRef<"product", 'Boolean'>
    readonly is_active: FieldRef<"product", 'Boolean'>
    readonly tag: FieldRef<"product", 'String[]'>
    readonly slug: FieldRef<"product", 'String'>
    readonly description: FieldRef<"product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * product updateManyAndReturn
   */
  export type productUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * product.categories
   */
  export type product$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * product.variants
   */
  export type product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    where?: variantWhereInput
    orderBy?: variantOrderByWithRelationInput | variantOrderByWithRelationInput[]
    cursor?: variantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * product.cartItem
   */
  export type product$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    cursor?: cartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * product.order
   */
  export type product$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
  }


  /**
   * Model variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    id: number | null
    Price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantSumAggregateOutputType = {
    id: number | null
    Price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: number | null
    description: string | null
    Price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantMaxAggregateOutputType = {
    id: number | null
    description: string | null
    Price: number | null
    stock: number | null
    productId: number | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    description: number
    specification: number
    Price: number
    stock: number
    productId: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    id?: true
    Price?: true
    stock?: true
    productId?: true
  }

  export type VariantSumAggregateInputType = {
    id?: true
    Price?: true
    stock?: true
    productId?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    description?: true
    Price?: true
    stock?: true
    productId?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    description?: true
    Price?: true
    stock?: true
    productId?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    description?: true
    specification?: true
    Price?: true
    stock?: true
    productId?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variant to aggregate.
     */
    where?: variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantOrderByWithRelationInput | variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type variantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantWhereInput
    orderBy?: variantOrderByWithAggregationInput | variantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: variantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: number
    description: string
    specification: JsonValue
    Price: number
    stock: number
    productId: number
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends variantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type variantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    specification?: boolean
    Price?: boolean
    stock?: boolean
    productId?: boolean
    images?: boolean | variant$imagesArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    cartItem?: boolean | variant$cartItemArgs<ExtArgs>
    orderItems?: boolean | variant$orderItemsArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type variantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    specification?: boolean
    Price?: boolean
    stock?: boolean
    productId?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type variantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    specification?: boolean
    Price?: boolean
    stock?: boolean
    productId?: boolean
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type variantSelectScalar = {
    id?: boolean
    description?: boolean
    specification?: boolean
    Price?: boolean
    stock?: boolean
    productId?: boolean
  }

  export type variantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "specification" | "Price" | "stock" | "productId", ExtArgs["result"]["variant"]>
  export type variantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | variant$imagesArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
    cartItem?: boolean | variant$cartItemArgs<ExtArgs>
    orderItems?: boolean | variant$orderItemsArgs<ExtArgs>
    _count?: boolean | VariantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type variantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type variantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $variantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variant"
    objects: {
      images: Prisma.$variantimagePayload<ExtArgs>[]
      product: Prisma.$productPayload<ExtArgs>
      cartItem: Prisma.$cartItemPayload<ExtArgs>[]
      orderItems: Prisma.$orderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      specification: Prisma.JsonValue
      Price: number
      stock: number
      productId: number
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type variantGetPayload<S extends boolean | null | undefined | variantDefaultArgs> = $Result.GetResult<Prisma.$variantPayload, S>

  type variantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface variantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variant'], meta: { name: 'variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {variantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variantFindUniqueArgs>(args: SelectSubset<T, variantFindUniqueArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variantFindUniqueOrThrowArgs>(args: SelectSubset<T, variantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variantFindFirstArgs>(args?: SelectSubset<T, variantFindFirstArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variantFindFirstOrThrowArgs>(args?: SelectSubset<T, variantFindFirstOrThrowArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variantFindManyArgs>(args?: SelectSubset<T, variantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {variantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends variantCreateArgs>(args: SelectSubset<T, variantCreateArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {variantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variantCreateManyArgs>(args?: SelectSubset<T, variantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {variantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends variantCreateManyAndReturnArgs>(args?: SelectSubset<T, variantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variant.
     * @param {variantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends variantDeleteArgs>(args: SelectSubset<T, variantDeleteArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {variantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variantUpdateArgs>(args: SelectSubset<T, variantUpdateArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {variantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variantDeleteManyArgs>(args?: SelectSubset<T, variantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variantUpdateManyArgs>(args: SelectSubset<T, variantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {variantUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends variantUpdateManyAndReturnArgs>(args: SelectSubset<T, variantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variant.
     * @param {variantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends variantUpsertArgs>(args: SelectSubset<T, variantUpsertArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends variantCountArgs>(
      args?: Subset<T, variantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends variantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variantGroupByArgs['orderBy'] }
        : { orderBy?: variantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, variantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variant model
   */
  readonly fields: variantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends variant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, variant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cartItem<T extends variant$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, variant$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends variant$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, variant$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the variant model
   */
  interface variantFieldRefs {
    readonly id: FieldRef<"variant", 'Int'>
    readonly description: FieldRef<"variant", 'String'>
    readonly specification: FieldRef<"variant", 'Json'>
    readonly Price: FieldRef<"variant", 'Float'>
    readonly stock: FieldRef<"variant", 'Int'>
    readonly productId: FieldRef<"variant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * variant findUnique
   */
  export type variantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter, which variant to fetch.
     */
    where: variantWhereUniqueInput
  }

  /**
   * variant findUniqueOrThrow
   */
  export type variantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter, which variant to fetch.
     */
    where: variantWhereUniqueInput
  }

  /**
   * variant findFirst
   */
  export type variantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter, which variant to fetch.
     */
    where?: variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantOrderByWithRelationInput | variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * variant findFirstOrThrow
   */
  export type variantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter, which variant to fetch.
     */
    where?: variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantOrderByWithRelationInput | variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variants.
     */
    cursor?: variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * variant findMany
   */
  export type variantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter, which variants to fetch.
     */
    where?: variantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variants to fetch.
     */
    orderBy?: variantOrderByWithRelationInput | variantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variants.
     */
    cursor?: variantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * variant create
   */
  export type variantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * The data needed to create a variant.
     */
    data: XOR<variantCreateInput, variantUncheckedCreateInput>
  }

  /**
   * variant createMany
   */
  export type variantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variants.
     */
    data: variantCreateManyInput | variantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variant createManyAndReturn
   */
  export type variantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * The data used to create many variants.
     */
    data: variantCreateManyInput | variantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * variant update
   */
  export type variantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * The data needed to update a variant.
     */
    data: XOR<variantUpdateInput, variantUncheckedUpdateInput>
    /**
     * Choose, which variant to update.
     */
    where: variantWhereUniqueInput
  }

  /**
   * variant updateMany
   */
  export type variantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variants.
     */
    data: XOR<variantUpdateManyMutationInput, variantUncheckedUpdateManyInput>
    /**
     * Filter which variants to update
     */
    where?: variantWhereInput
    /**
     * Limit how many variants to update.
     */
    limit?: number
  }

  /**
   * variant updateManyAndReturn
   */
  export type variantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * The data used to update variants.
     */
    data: XOR<variantUpdateManyMutationInput, variantUncheckedUpdateManyInput>
    /**
     * Filter which variants to update
     */
    where?: variantWhereInput
    /**
     * Limit how many variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * variant upsert
   */
  export type variantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * The filter to search for the variant to update in case it exists.
     */
    where: variantWhereUniqueInput
    /**
     * In case the variant found by the `where` argument doesn't exist, create a new variant with this data.
     */
    create: XOR<variantCreateInput, variantUncheckedCreateInput>
    /**
     * In case the variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variantUpdateInput, variantUncheckedUpdateInput>
  }

  /**
   * variant delete
   */
  export type variantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    /**
     * Filter which variant to delete.
     */
    where: variantWhereUniqueInput
  }

  /**
   * variant deleteMany
   */
  export type variantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variants to delete
     */
    where?: variantWhereInput
    /**
     * Limit how many variants to delete.
     */
    limit?: number
  }

  /**
   * variant.images
   */
  export type variant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    where?: variantimageWhereInput
    orderBy?: variantimageOrderByWithRelationInput | variantimageOrderByWithRelationInput[]
    cursor?: variantimageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantimageScalarFieldEnum | VariantimageScalarFieldEnum[]
  }

  /**
   * variant.cartItem
   */
  export type variant$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    cursor?: cartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * variant.orderItems
   */
  export type variant$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * variant without action
   */
  export type variantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
  }


  /**
   * Model variantimage
   */

  export type AggregateVariantimage = {
    _count: VariantimageCountAggregateOutputType | null
    _avg: VariantimageAvgAggregateOutputType | null
    _sum: VariantimageSumAggregateOutputType | null
    _min: VariantimageMinAggregateOutputType | null
    _max: VariantimageMaxAggregateOutputType | null
  }

  export type VariantimageAvgAggregateOutputType = {
    id: number | null
    variantId: number | null
  }

  export type VariantimageSumAggregateOutputType = {
    id: number | null
    variantId: number | null
  }

  export type VariantimageMinAggregateOutputType = {
    id: number | null
    url: string | null
    variantId: number | null
  }

  export type VariantimageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    variantId: number | null
  }

  export type VariantimageCountAggregateOutputType = {
    id: number
    url: number
    variantId: number
    _all: number
  }


  export type VariantimageAvgAggregateInputType = {
    id?: true
    variantId?: true
  }

  export type VariantimageSumAggregateInputType = {
    id?: true
    variantId?: true
  }

  export type VariantimageMinAggregateInputType = {
    id?: true
    url?: true
    variantId?: true
  }

  export type VariantimageMaxAggregateInputType = {
    id?: true
    url?: true
    variantId?: true
  }

  export type VariantimageCountAggregateInputType = {
    id?: true
    url?: true
    variantId?: true
    _all?: true
  }

  export type VariantimageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variantimage to aggregate.
     */
    where?: variantimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantimages to fetch.
     */
    orderBy?: variantimageOrderByWithRelationInput | variantimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: variantimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned variantimages
    **/
    _count?: true | VariantimageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantimageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantimageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantimageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantimageMaxAggregateInputType
  }

  export type GetVariantimageAggregateType<T extends VariantimageAggregateArgs> = {
        [P in keyof T & keyof AggregateVariantimage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariantimage[P]>
      : GetScalarType<T[P], AggregateVariantimage[P]>
  }




  export type variantimageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: variantimageWhereInput
    orderBy?: variantimageOrderByWithAggregationInput | variantimageOrderByWithAggregationInput[]
    by: VariantimageScalarFieldEnum[] | VariantimageScalarFieldEnum
    having?: variantimageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantimageCountAggregateInputType | true
    _avg?: VariantimageAvgAggregateInputType
    _sum?: VariantimageSumAggregateInputType
    _min?: VariantimageMinAggregateInputType
    _max?: VariantimageMaxAggregateInputType
  }

  export type VariantimageGroupByOutputType = {
    id: number
    url: string
    variantId: number
    _count: VariantimageCountAggregateOutputType | null
    _avg: VariantimageAvgAggregateOutputType | null
    _sum: VariantimageSumAggregateOutputType | null
    _min: VariantimageMinAggregateOutputType | null
    _max: VariantimageMaxAggregateOutputType | null
  }

  type GetVariantimageGroupByPayload<T extends variantimageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantimageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantimageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantimageGroupByOutputType[P]>
            : GetScalarType<T[P], VariantimageGroupByOutputType[P]>
        }
      >
    >


  export type variantimageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    variantId?: boolean
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantimage"]>

  export type variantimageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    variantId?: boolean
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantimage"]>

  export type variantimageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    variantId?: boolean
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variantimage"]>

  export type variantimageSelectScalar = {
    id?: boolean
    url?: boolean
    variantId?: boolean
  }

  export type variantimageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "variantId", ExtArgs["result"]["variantimage"]>
  export type variantimageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }
  export type variantimageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }
  export type variantimageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | variantDefaultArgs<ExtArgs>
  }

  export type $variantimagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "variantimage"
    objects: {
      variant: Prisma.$variantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      variantId: number
    }, ExtArgs["result"]["variantimage"]>
    composites: {}
  }

  type variantimageGetPayload<S extends boolean | null | undefined | variantimageDefaultArgs> = $Result.GetResult<Prisma.$variantimagePayload, S>

  type variantimageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<variantimageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantimageCountAggregateInputType | true
    }

  export interface variantimageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['variantimage'], meta: { name: 'variantimage' } }
    /**
     * Find zero or one Variantimage that matches the filter.
     * @param {variantimageFindUniqueArgs} args - Arguments to find a Variantimage
     * @example
     * // Get one Variantimage
     * const variantimage = await prisma.variantimage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends variantimageFindUniqueArgs>(args: SelectSubset<T, variantimageFindUniqueArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variantimage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {variantimageFindUniqueOrThrowArgs} args - Arguments to find a Variantimage
     * @example
     * // Get one Variantimage
     * const variantimage = await prisma.variantimage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends variantimageFindUniqueOrThrowArgs>(args: SelectSubset<T, variantimageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variantimage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageFindFirstArgs} args - Arguments to find a Variantimage
     * @example
     * // Get one Variantimage
     * const variantimage = await prisma.variantimage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends variantimageFindFirstArgs>(args?: SelectSubset<T, variantimageFindFirstArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variantimage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageFindFirstOrThrowArgs} args - Arguments to find a Variantimage
     * @example
     * // Get one Variantimage
     * const variantimage = await prisma.variantimage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends variantimageFindFirstOrThrowArgs>(args?: SelectSubset<T, variantimageFindFirstOrThrowArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variantimages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variantimages
     * const variantimages = await prisma.variantimage.findMany()
     * 
     * // Get first 10 Variantimages
     * const variantimages = await prisma.variantimage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantimageWithIdOnly = await prisma.variantimage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends variantimageFindManyArgs>(args?: SelectSubset<T, variantimageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variantimage.
     * @param {variantimageCreateArgs} args - Arguments to create a Variantimage.
     * @example
     * // Create one Variantimage
     * const Variantimage = await prisma.variantimage.create({
     *   data: {
     *     // ... data to create a Variantimage
     *   }
     * })
     * 
     */
    create<T extends variantimageCreateArgs>(args: SelectSubset<T, variantimageCreateArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variantimages.
     * @param {variantimageCreateManyArgs} args - Arguments to create many Variantimages.
     * @example
     * // Create many Variantimages
     * const variantimage = await prisma.variantimage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends variantimageCreateManyArgs>(args?: SelectSubset<T, variantimageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variantimages and returns the data saved in the database.
     * @param {variantimageCreateManyAndReturnArgs} args - Arguments to create many Variantimages.
     * @example
     * // Create many Variantimages
     * const variantimage = await prisma.variantimage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variantimages and only return the `id`
     * const variantimageWithIdOnly = await prisma.variantimage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends variantimageCreateManyAndReturnArgs>(args?: SelectSubset<T, variantimageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variantimage.
     * @param {variantimageDeleteArgs} args - Arguments to delete one Variantimage.
     * @example
     * // Delete one Variantimage
     * const Variantimage = await prisma.variantimage.delete({
     *   where: {
     *     // ... filter to delete one Variantimage
     *   }
     * })
     * 
     */
    delete<T extends variantimageDeleteArgs>(args: SelectSubset<T, variantimageDeleteArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variantimage.
     * @param {variantimageUpdateArgs} args - Arguments to update one Variantimage.
     * @example
     * // Update one Variantimage
     * const variantimage = await prisma.variantimage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends variantimageUpdateArgs>(args: SelectSubset<T, variantimageUpdateArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variantimages.
     * @param {variantimageDeleteManyArgs} args - Arguments to filter Variantimages to delete.
     * @example
     * // Delete a few Variantimages
     * const { count } = await prisma.variantimage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends variantimageDeleteManyArgs>(args?: SelectSubset<T, variantimageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variantimages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variantimages
     * const variantimage = await prisma.variantimage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends variantimageUpdateManyArgs>(args: SelectSubset<T, variantimageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variantimages and returns the data updated in the database.
     * @param {variantimageUpdateManyAndReturnArgs} args - Arguments to update many Variantimages.
     * @example
     * // Update many Variantimages
     * const variantimage = await prisma.variantimage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variantimages and only return the `id`
     * const variantimageWithIdOnly = await prisma.variantimage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends variantimageUpdateManyAndReturnArgs>(args: SelectSubset<T, variantimageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variantimage.
     * @param {variantimageUpsertArgs} args - Arguments to update or create a Variantimage.
     * @example
     * // Update or create a Variantimage
     * const variantimage = await prisma.variantimage.upsert({
     *   create: {
     *     // ... data to create a Variantimage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variantimage we want to update
     *   }
     * })
     */
    upsert<T extends variantimageUpsertArgs>(args: SelectSubset<T, variantimageUpsertArgs<ExtArgs>>): Prisma__variantimageClient<$Result.GetResult<Prisma.$variantimagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variantimages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageCountArgs} args - Arguments to filter Variantimages to count.
     * @example
     * // Count the number of Variantimages
     * const count = await prisma.variantimage.count({
     *   where: {
     *     // ... the filter for the Variantimages we want to count
     *   }
     * })
    **/
    count<T extends variantimageCountArgs>(
      args?: Subset<T, variantimageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantimageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variantimage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantimageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VariantimageAggregateArgs>(args: Subset<T, VariantimageAggregateArgs>): Prisma.PrismaPromise<GetVariantimageAggregateType<T>>

    /**
     * Group by Variantimage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {variantimageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends variantimageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: variantimageGroupByArgs['orderBy'] }
        : { orderBy?: variantimageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, variantimageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantimageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the variantimage model
   */
  readonly fields: variantimageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for variantimage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__variantimageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends variantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, variantDefaultArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the variantimage model
   */
  interface variantimageFieldRefs {
    readonly id: FieldRef<"variantimage", 'Int'>
    readonly url: FieldRef<"variantimage", 'String'>
    readonly variantId: FieldRef<"variantimage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * variantimage findUnique
   */
  export type variantimageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter, which variantimage to fetch.
     */
    where: variantimageWhereUniqueInput
  }

  /**
   * variantimage findUniqueOrThrow
   */
  export type variantimageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter, which variantimage to fetch.
     */
    where: variantimageWhereUniqueInput
  }

  /**
   * variantimage findFirst
   */
  export type variantimageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter, which variantimage to fetch.
     */
    where?: variantimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantimages to fetch.
     */
    orderBy?: variantimageOrderByWithRelationInput | variantimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variantimages.
     */
    cursor?: variantimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variantimages.
     */
    distinct?: VariantimageScalarFieldEnum | VariantimageScalarFieldEnum[]
  }

  /**
   * variantimage findFirstOrThrow
   */
  export type variantimageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter, which variantimage to fetch.
     */
    where?: variantimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantimages to fetch.
     */
    orderBy?: variantimageOrderByWithRelationInput | variantimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for variantimages.
     */
    cursor?: variantimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantimages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of variantimages.
     */
    distinct?: VariantimageScalarFieldEnum | VariantimageScalarFieldEnum[]
  }

  /**
   * variantimage findMany
   */
  export type variantimageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter, which variantimages to fetch.
     */
    where?: variantimageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of variantimages to fetch.
     */
    orderBy?: variantimageOrderByWithRelationInput | variantimageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing variantimages.
     */
    cursor?: variantimageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` variantimages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` variantimages.
     */
    skip?: number
    distinct?: VariantimageScalarFieldEnum | VariantimageScalarFieldEnum[]
  }

  /**
   * variantimage create
   */
  export type variantimageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * The data needed to create a variantimage.
     */
    data: XOR<variantimageCreateInput, variantimageUncheckedCreateInput>
  }

  /**
   * variantimage createMany
   */
  export type variantimageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many variantimages.
     */
    data: variantimageCreateManyInput | variantimageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * variantimage createManyAndReturn
   */
  export type variantimageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * The data used to create many variantimages.
     */
    data: variantimageCreateManyInput | variantimageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * variantimage update
   */
  export type variantimageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * The data needed to update a variantimage.
     */
    data: XOR<variantimageUpdateInput, variantimageUncheckedUpdateInput>
    /**
     * Choose, which variantimage to update.
     */
    where: variantimageWhereUniqueInput
  }

  /**
   * variantimage updateMany
   */
  export type variantimageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update variantimages.
     */
    data: XOR<variantimageUpdateManyMutationInput, variantimageUncheckedUpdateManyInput>
    /**
     * Filter which variantimages to update
     */
    where?: variantimageWhereInput
    /**
     * Limit how many variantimages to update.
     */
    limit?: number
  }

  /**
   * variantimage updateManyAndReturn
   */
  export type variantimageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * The data used to update variantimages.
     */
    data: XOR<variantimageUpdateManyMutationInput, variantimageUncheckedUpdateManyInput>
    /**
     * Filter which variantimages to update
     */
    where?: variantimageWhereInput
    /**
     * Limit how many variantimages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * variantimage upsert
   */
  export type variantimageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * The filter to search for the variantimage to update in case it exists.
     */
    where: variantimageWhereUniqueInput
    /**
     * In case the variantimage found by the `where` argument doesn't exist, create a new variantimage with this data.
     */
    create: XOR<variantimageCreateInput, variantimageUncheckedCreateInput>
    /**
     * In case the variantimage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<variantimageUpdateInput, variantimageUncheckedUpdateInput>
  }

  /**
   * variantimage delete
   */
  export type variantimageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
    /**
     * Filter which variantimage to delete.
     */
    where: variantimageWhereUniqueInput
  }

  /**
   * variantimage deleteMany
   */
  export type variantimageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which variantimages to delete
     */
    where?: variantimageWhereInput
    /**
     * Limit how many variantimages to delete.
     */
    limit?: number
  }

  /**
   * variantimage without action
   */
  export type variantimageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variantimage
     */
    select?: variantimageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variantimage
     */
    omit?: variantimageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantimageInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
    parentId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    parentId: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    parentId: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
    parentId?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    parentId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    parentId: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | category$parentArgs<ExtArgs>
    subcategories?: boolean | category$subcategoriesArgs<ExtArgs>
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parentId?: boolean
    parent?: boolean | category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    parentId?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "parentId", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | category$parentArgs<ExtArgs>
    subcategories?: boolean | category$subcategoriesArgs<ExtArgs>
    products?: boolean | category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | category$parentArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | category$parentArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      parent: Prisma.$categoryPayload<ExtArgs> | null
      subcategories: Prisma.$categoryPayload<ExtArgs>[]
      products: Prisma.$productPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      parentId: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends category$parentArgs<ExtArgs> = {}>(args?: Subset<T, category$parentArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends category$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, category$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends category$productsArgs<ExtArgs> = {}>(args?: Subset<T, category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'Int'>
    readonly name: FieldRef<"category", 'String'>
    readonly parentId: FieldRef<"category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.parent
   */
  export type category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
  }

  /**
   * category.subcategories
   */
  export type category$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category.products
   */
  export type category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    cursor?: productWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CartMinAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: number
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    items?: boolean | cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type cartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    items?: boolean | cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type cartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      items: Prisma.$cartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartUpdateManyAndReturnArgs>(args: SelectSubset<T, cartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */
  interface cartFieldRefs {
    readonly id: FieldRef<"cart", 'Int'>
    readonly userId: FieldRef<"cart", 'Int'>
    readonly createdAt: FieldRef<"cart", 'DateTime'>
    readonly updatedAt: FieldRef<"cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * cart updateManyAndReturn
   */
  export type cartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * cart.items
   */
  export type cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    cursor?: cartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart
     */
    omit?: cartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model cartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    addedAt: Date | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    cartId: number | null
    productId: number | null
    variantId: number | null
    quantity: number | null
    addedAt: Date | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    variantId: number
    quantity: number
    addedAt: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    addedAt?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    addedAt?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    variantId?: true
    quantity?: true
    addedAt?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartItem to aggregate.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type cartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithAggregationInput | cartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: cartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    cartId: number
    productId: number | null
    variantId: number | null
    quantity: number
    addedAt: Date
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends cartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type cartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    addedAt?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type cartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    addedAt?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type cartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    addedAt?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type cartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    productId?: boolean
    variantId?: boolean
    quantity?: boolean
    addedAt?: boolean
  }

  export type cartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productId" | "variantId" | "quantity" | "addedAt", ExtArgs["result"]["cartItem"]>
  export type cartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }
  export type cartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }
  export type cartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | cartItem$productArgs<ExtArgs>
    variant?: boolean | cartItem$variantArgs<ExtArgs>
  }

  export type $cartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cartItem"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs> | null
      variant: Prisma.$variantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cartId: number
      productId: number | null
      variantId: number | null
      quantity: number
      addedAt: Date
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type cartItemGetPayload<S extends boolean | null | undefined | cartItemDefaultArgs> = $Result.GetResult<Prisma.$cartItemPayload, S>

  type cartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface cartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cartItem'], meta: { name: 'cartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {cartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartItemFindUniqueArgs>(args: SelectSubset<T, cartItemFindUniqueArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, cartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartItemFindFirstArgs>(args?: SelectSubset<T, cartItemFindFirstArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, cartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartItemFindManyArgs>(args?: SelectSubset<T, cartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {cartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends cartItemCreateArgs>(args: SelectSubset<T, cartItemCreateArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {cartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartItemCreateManyArgs>(args?: SelectSubset<T, cartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {cartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, cartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {cartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends cartItemDeleteArgs>(args: SelectSubset<T, cartItemDeleteArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {cartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartItemUpdateArgs>(args: SelectSubset<T, cartItemUpdateArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {cartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartItemDeleteManyArgs>(args?: SelectSubset<T, cartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartItemUpdateManyArgs>(args: SelectSubset<T, cartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {cartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, cartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {cartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends cartItemUpsertArgs>(args: SelectSubset<T, cartItemUpsertArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends cartItemCountArgs>(
      args?: Subset<T, cartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartItemGroupByArgs['orderBy'] }
        : { orderBy?: cartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cartItem model
   */
  readonly fields: cartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends cartItem$productArgs<ExtArgs> = {}>(args?: Subset<T, cartItem$productArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    variant<T extends cartItem$variantArgs<ExtArgs> = {}>(args?: Subset<T, cartItem$variantArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cartItem model
   */
  interface cartItemFieldRefs {
    readonly id: FieldRef<"cartItem", 'Int'>
    readonly cartId: FieldRef<"cartItem", 'Int'>
    readonly productId: FieldRef<"cartItem", 'Int'>
    readonly variantId: FieldRef<"cartItem", 'Int'>
    readonly quantity: FieldRef<"cartItem", 'Int'>
    readonly addedAt: FieldRef<"cartItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cartItem findUnique
   */
  export type cartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem findUniqueOrThrow
   */
  export type cartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem findFirst
   */
  export type cartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem findFirstOrThrow
   */
  export type cartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem findMany
   */
  export type cartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItems to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem create
   */
  export type cartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a cartItem.
     */
    data: XOR<cartItemCreateInput, cartItemUncheckedCreateInput>
  }

  /**
   * cartItem createMany
   */
  export type cartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartItems.
     */
    data: cartItemCreateManyInput | cartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cartItem createManyAndReturn
   */
  export type cartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * The data used to create many cartItems.
     */
    data: cartItemCreateManyInput | cartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cartItem update
   */
  export type cartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a cartItem.
     */
    data: XOR<cartItemUpdateInput, cartItemUncheckedUpdateInput>
    /**
     * Choose, which cartItem to update.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem updateMany
   */
  export type cartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartItems.
     */
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyInput>
    /**
     * Filter which cartItems to update
     */
    where?: cartItemWhereInput
    /**
     * Limit how many cartItems to update.
     */
    limit?: number
  }

  /**
   * cartItem updateManyAndReturn
   */
  export type cartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * The data used to update cartItems.
     */
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyInput>
    /**
     * Filter which cartItems to update
     */
    where?: cartItemWhereInput
    /**
     * Limit how many cartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cartItem upsert
   */
  export type cartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the cartItem to update in case it exists.
     */
    where: cartItemWhereUniqueInput
    /**
     * In case the cartItem found by the `where` argument doesn't exist, create a new cartItem with this data.
     */
    create: XOR<cartItemCreateInput, cartItemUncheckedCreateInput>
    /**
     * In case the cartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartItemUpdateInput, cartItemUncheckedUpdateInput>
  }

  /**
   * cartItem delete
   */
  export type cartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter which cartItem to delete.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem deleteMany
   */
  export type cartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartItems to delete
     */
    where?: cartItemWhereInput
    /**
     * Limit how many cartItems to delete.
     */
    limit?: number
  }

  /**
   * cartItem.product
   */
  export type cartItem$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product
     */
    omit?: productOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productInclude<ExtArgs> | null
    where?: productWhereInput
  }

  /**
   * cartItem.variant
   */
  export type cartItem$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    where?: variantWhereInput
  }

  /**
   * cartItem without action
   */
  export type cartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cartItem
     */
    omit?: cartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
  }


  /**
   * Model address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    addressType: $Enums.AddressType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    addressType: $Enums.AddressType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    userId: number
    street: number
    city: number
    state: number
    postalCode: number
    country: number
    addressType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    userId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    addressType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    userId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    addressType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    userId?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    addressType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which address to aggregate.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type addressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressWhereInput
    orderBy?: addressOrderByWithAggregationInput | addressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: addressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    userId: number
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends addressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type addressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type addressSelectScalar = {
    id?: boolean
    userId?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    addressType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type addressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "street" | "city" | "state" | "postalCode" | "country" | "addressType" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type addressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type addressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type addressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $addressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "address"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      street: string
      city: string
      state: string
      postalCode: string
      country: string
      addressType: $Enums.AddressType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type addressGetPayload<S extends boolean | null | undefined | addressDefaultArgs> = $Result.GetResult<Prisma.$addressPayload, S>

  type addressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface addressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['address'], meta: { name: 'address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {addressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressFindUniqueArgs>(args: SelectSubset<T, addressFindUniqueArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressFindUniqueOrThrowArgs>(args: SelectSubset<T, addressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressFindFirstArgs>(args?: SelectSubset<T, addressFindFirstArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressFindFirstOrThrowArgs>(args?: SelectSubset<T, addressFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressFindManyArgs>(args?: SelectSubset<T, addressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {addressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends addressCreateArgs>(args: SelectSubset<T, addressCreateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressCreateManyArgs>(args?: SelectSubset<T, addressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressCreateManyAndReturnArgs>(args?: SelectSubset<T, addressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {addressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends addressDeleteArgs>(args: SelectSubset<T, addressDeleteArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {addressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressUpdateArgs>(args: SelectSubset<T, addressUpdateArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressDeleteManyArgs>(args?: SelectSubset<T, addressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressUpdateManyArgs>(args: SelectSubset<T, addressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressUpdateManyAndReturnArgs>(args: SelectSubset<T, addressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {addressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends addressUpsertArgs>(args: SelectSubset<T, addressUpsertArgs<ExtArgs>>): Prisma__addressClient<$Result.GetResult<Prisma.$addressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressCountArgs>(
      args?: Subset<T, addressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressGroupByArgs['orderBy'] }
        : { orderBy?: addressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the address model
   */
  readonly fields: addressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the address model
   */
  interface addressFieldRefs {
    readonly id: FieldRef<"address", 'Int'>
    readonly userId: FieldRef<"address", 'Int'>
    readonly street: FieldRef<"address", 'String'>
    readonly city: FieldRef<"address", 'String'>
    readonly state: FieldRef<"address", 'String'>
    readonly postalCode: FieldRef<"address", 'String'>
    readonly country: FieldRef<"address", 'String'>
    readonly addressType: FieldRef<"address", 'AddressType'>
    readonly createdAt: FieldRef<"address", 'DateTime'>
    readonly updatedAt: FieldRef<"address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * address findUnique
   */
  export type addressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findUniqueOrThrow
   */
  export type addressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address findFirst
   */
  export type addressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findFirstOrThrow
   */
  export type addressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which address to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address findMany
   */
  export type addressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressOrderByWithRelationInput | addressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * address create
   */
  export type addressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to create a address.
     */
    data: XOR<addressCreateInput, addressUncheckedCreateInput>
  }

  /**
   * address createMany
   */
  export type addressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * address createManyAndReturn
   */
  export type addressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressCreateManyInput | addressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * address update
   */
  export type addressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The data needed to update a address.
     */
    data: XOR<addressUpdateInput, addressUncheckedUpdateInput>
    /**
     * Choose, which address to update.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address updateMany
   */
  export type addressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * address updateManyAndReturn
   */
  export type addressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * address upsert
   */
  export type addressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * The filter to search for the address to update in case it exists.
     */
    where: addressWhereUniqueInput
    /**
     * In case the address found by the `where` argument doesn't exist, create a new address with this data.
     */
    create: XOR<addressCreateInput, addressUncheckedCreateInput>
    /**
     * In case the address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressUpdateInput, addressUncheckedUpdateInput>
  }

  /**
   * address delete
   */
  export type addressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
    /**
     * Filter which address to delete.
     */
    where: addressWhereUniqueInput
  }

  /**
   * address deleteMany
   */
  export type addressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * address without action
   */
  export type addressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the address
     */
    select?: addressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the address
     */
    omit?: addressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressInclude<ExtArgs> | null
  }


  /**
   * Model order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    subTotal: number | null
    tax: number | null
    discount: number | null
    deliveryCharge: number | null
    finalTotal: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    subTotal: number | null
    tax: number | null
    discount: number | null
    deliveryCharge: number | null
    finalTotal: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    guestemail: string | null
    subTotal: number | null
    tax: number | null
    discount: number | null
    deliveryCharge: number | null
    finalTotal: number | null
    billingAddress: string | null
    deliveryAddress: string | null
    status: $Enums.OrderStatus | null
    is_payment_done: boolean | null
    createdAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    guestemail: string | null
    subTotal: number | null
    tax: number | null
    discount: number | null
    deliveryCharge: number | null
    finalTotal: number | null
    billingAddress: string | null
    deliveryAddress: string | null
    status: $Enums.OrderStatus | null
    is_payment_done: boolean | null
    createdAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    guestemail: number
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: number
    deliveryAddress: number
    status: number
    is_payment_done: number
    createdAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    subTotal?: true
    tax?: true
    discount?: true
    deliveryCharge?: true
    finalTotal?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    subTotal?: true
    tax?: true
    discount?: true
    deliveryCharge?: true
    finalTotal?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    guestemail?: true
    subTotal?: true
    tax?: true
    discount?: true
    deliveryCharge?: true
    finalTotal?: true
    billingAddress?: true
    deliveryAddress?: true
    status?: true
    is_payment_done?: true
    createdAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    guestemail?: true
    subTotal?: true
    tax?: true
    discount?: true
    deliveryCharge?: true
    finalTotal?: true
    billingAddress?: true
    deliveryAddress?: true
    status?: true
    is_payment_done?: true
    createdAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    guestemail?: true
    subTotal?: true
    tax?: true
    discount?: true
    deliveryCharge?: true
    finalTotal?: true
    billingAddress?: true
    deliveryAddress?: true
    status?: true
    is_payment_done?: true
    createdAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order to aggregate.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type orderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderWhereInput
    orderBy?: orderOrderByWithAggregationInput | orderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: orderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number | null
    guestemail: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type orderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    guestemail?: boolean
    subTotal?: boolean
    tax?: boolean
    discount?: boolean
    deliveryCharge?: boolean
    finalTotal?: boolean
    billingAddress?: boolean
    deliveryAddress?: boolean
    status?: boolean
    is_payment_done?: boolean
    createdAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
    orderItems?: boolean | order$orderItemsArgs<ExtArgs>
    payment?: boolean | order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    guestemail?: boolean
    subTotal?: boolean
    tax?: boolean
    discount?: boolean
    deliveryCharge?: boolean
    finalTotal?: boolean
    billingAddress?: boolean
    deliveryAddress?: boolean
    status?: boolean
    is_payment_done?: boolean
    createdAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    guestemail?: boolean
    subTotal?: boolean
    tax?: boolean
    discount?: boolean
    deliveryCharge?: boolean
    finalTotal?: boolean
    billingAddress?: boolean
    deliveryAddress?: boolean
    status?: boolean
    is_payment_done?: boolean
    createdAt?: boolean
    user?: boolean | order$userArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type orderSelectScalar = {
    id?: boolean
    userId?: boolean
    guestemail?: boolean
    subTotal?: boolean
    tax?: boolean
    discount?: boolean
    deliveryCharge?: boolean
    finalTotal?: boolean
    billingAddress?: boolean
    deliveryAddress?: boolean
    status?: boolean
    is_payment_done?: boolean
    createdAt?: boolean
  }

  export type orderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "guestemail" | "subTotal" | "tax" | "discount" | "deliveryCharge" | "finalTotal" | "billingAddress" | "deliveryAddress" | "status" | "is_payment_done" | "createdAt", ExtArgs["result"]["order"]>
  export type orderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
    orderItems?: boolean | order$orderItemsArgs<ExtArgs>
    payment?: boolean | order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type orderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }
  export type orderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | order$userArgs<ExtArgs>
  }

  export type $orderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order"
    objects: {
      user: Prisma.$userPayload<ExtArgs> | null
      orderItems: Prisma.$orderItemPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number | null
      guestemail: string | null
      subTotal: number
      tax: number
      discount: number
      deliveryCharge: number
      finalTotal: number
      billingAddress: string
      deliveryAddress: string
      status: $Enums.OrderStatus
      is_payment_done: boolean
      createdAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = $Result.GetResult<Prisma.$orderPayload, S>

  type orderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface orderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order'], meta: { name: 'order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {orderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderFindUniqueArgs>(args: SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderFindFirstArgs>(args?: SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderFindManyArgs>(args?: SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {orderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends orderCreateArgs>(args: SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {orderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderCreateManyArgs>(args?: SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {orderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {orderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends orderDeleteArgs>(args: SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {orderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderUpdateArgs>(args: SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {orderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderDeleteManyArgs>(args?: SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderUpdateManyArgs>(args: SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {orderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {orderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends orderUpsertArgs>(args: SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends orderCountArgs>(
      args?: Subset<T, orderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderGroupByArgs['orderBy'] }
        : { orderBy?: orderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order model
   */
  readonly fields: orderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends order$userArgs<ExtArgs> = {}>(args?: Subset<T, order$userArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order model
   */
  interface orderFieldRefs {
    readonly id: FieldRef<"order", 'Int'>
    readonly userId: FieldRef<"order", 'Int'>
    readonly guestemail: FieldRef<"order", 'String'>
    readonly subTotal: FieldRef<"order", 'Float'>
    readonly tax: FieldRef<"order", 'Float'>
    readonly discount: FieldRef<"order", 'Float'>
    readonly deliveryCharge: FieldRef<"order", 'Float'>
    readonly finalTotal: FieldRef<"order", 'Float'>
    readonly billingAddress: FieldRef<"order", 'String'>
    readonly deliveryAddress: FieldRef<"order", 'String'>
    readonly status: FieldRef<"order", 'OrderStatus'>
    readonly is_payment_done: FieldRef<"order", 'Boolean'>
    readonly createdAt: FieldRef<"order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order findUnique
   */
  export type orderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findUniqueOrThrow
   */
  export type orderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order findFirst
   */
  export type orderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findFirstOrThrow
   */
  export type orderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which order to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order findMany
   */
  export type orderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: orderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: orderOrderByWithRelationInput | orderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: orderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * order create
   */
  export type orderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to create a order.
     */
    data: XOR<orderCreateInput, orderUncheckedCreateInput>
  }

  /**
   * order createMany
   */
  export type orderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order createManyAndReturn
   */
  export type orderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: orderCreateManyInput | orderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order update
   */
  export type orderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The data needed to update a order.
     */
    data: XOR<orderUpdateInput, orderUncheckedUpdateInput>
    /**
     * Choose, which order to update.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order updateMany
   */
  export type orderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * order updateManyAndReturn
   */
  export type orderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order upsert
   */
  export type orderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * The filter to search for the order to update in case it exists.
     */
    where: orderWhereUniqueInput
    /**
     * In case the order found by the `where` argument doesn't exist, create a new order with this data.
     */
    create: XOR<orderCreateInput, orderUncheckedCreateInput>
    /**
     * In case the order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderUpdateInput, orderUncheckedUpdateInput>
  }

  /**
   * order delete
   */
  export type orderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
    /**
     * Filter which order to delete.
     */
    where: orderWhereUniqueInput
  }

  /**
   * order deleteMany
   */
  export type orderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: orderWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * order.user
   */
  export type order$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * order.orderItems
   */
  export type order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    cursor?: orderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * order.payment
   */
  export type order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * order without action
   */
  export type orderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order
     */
    select?: orderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order
     */
    omit?: orderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderInclude<ExtArgs> | null
  }


  /**
   * Model orderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    unitPrice: number | null
    quantity: number | null
    variantId: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    unitPrice: number | null
    quantity: number | null
    variantId: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    unitPrice: number | null
    quantity: number | null
    variantId: number | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    productId: number | null
    unitPrice: number | null
    quantity: number | null
    variantId: number | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
    variantId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    unitPrice?: true
    quantity?: true
    variantId?: true
  }

  export type OrderItemSumAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    unitPrice?: true
    quantity?: true
    variantId?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    unitPrice?: true
    quantity?: true
    variantId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    unitPrice?: true
    quantity?: true
    variantId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    unitPrice?: true
    quantity?: true
    variantId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItem to aggregate.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type orderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: orderItemWhereInput
    orderBy?: orderItemOrderByWithAggregationInput | orderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: orderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
    variantId: number | null
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends orderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type orderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    unitPrice?: boolean
    quantity?: boolean
    variantId?: boolean
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    unitPrice?: boolean
    quantity?: boolean
    variantId?: boolean
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    unitPrice?: boolean
    quantity?: boolean
    variantId?: boolean
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type orderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    unitPrice?: boolean
    quantity?: boolean
    variantId?: boolean
  }

  export type orderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "unitPrice" | "quantity" | "variantId", ExtArgs["result"]["orderItem"]>
  export type orderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type orderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }
  export type orderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variant?: boolean | orderItem$variantArgs<ExtArgs>
    order?: boolean | orderDefaultArgs<ExtArgs>
    product?: boolean | productDefaultArgs<ExtArgs>
  }

  export type $orderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orderItem"
    objects: {
      variant: Prisma.$variantPayload<ExtArgs> | null
      order: Prisma.$orderPayload<ExtArgs>
      product: Prisma.$productPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      productId: number
      unitPrice: number
      quantity: number
      variantId: number | null
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type orderItemGetPayload<S extends boolean | null | undefined | orderItemDefaultArgs> = $Result.GetResult<Prisma.$orderItemPayload, S>

  type orderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<orderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface orderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orderItem'], meta: { name: 'orderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {orderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends orderItemFindUniqueArgs>(args: SelectSubset<T, orderItemFindUniqueArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {orderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends orderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, orderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends orderItemFindFirstArgs>(args?: SelectSubset<T, orderItemFindFirstArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends orderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, orderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends orderItemFindManyArgs>(args?: SelectSubset<T, orderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {orderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends orderItemCreateArgs>(args: SelectSubset<T, orderItemCreateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {orderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends orderItemCreateManyArgs>(args?: SelectSubset<T, orderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {orderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends orderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, orderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {orderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends orderItemDeleteArgs>(args: SelectSubset<T, orderItemDeleteArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {orderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends orderItemUpdateArgs>(args: SelectSubset<T, orderItemUpdateArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {orderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends orderItemDeleteManyArgs>(args?: SelectSubset<T, orderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends orderItemUpdateManyArgs>(args: SelectSubset<T, orderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {orderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends orderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, orderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {orderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends orderItemUpsertArgs>(args: SelectSubset<T, orderItemUpsertArgs<ExtArgs>>): Prisma__orderItemClient<$Result.GetResult<Prisma.$orderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends orderItemCountArgs>(
      args?: Subset<T, orderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {orderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends orderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: orderItemGroupByArgs['orderBy'] }
        : { orderBy?: orderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, orderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orderItem model
   */
  readonly fields: orderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__orderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variant<T extends orderItem$variantArgs<ExtArgs> = {}>(args?: Subset<T, orderItem$variantArgs<ExtArgs>>): Prisma__variantClient<$Result.GetResult<Prisma.$variantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends productDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productDefaultArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orderItem model
   */
  interface orderItemFieldRefs {
    readonly id: FieldRef<"orderItem", 'Int'>
    readonly orderId: FieldRef<"orderItem", 'Int'>
    readonly productId: FieldRef<"orderItem", 'Int'>
    readonly unitPrice: FieldRef<"orderItem", 'Float'>
    readonly quantity: FieldRef<"orderItem", 'Int'>
    readonly variantId: FieldRef<"orderItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orderItem findUnique
   */
  export type orderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findUniqueOrThrow
   */
  export type orderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem findFirst
   */
  export type orderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findFirstOrThrow
   */
  export type orderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItem to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem findMany
   */
  export type orderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter, which orderItems to fetch.
     */
    where?: orderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orderItems to fetch.
     */
    orderBy?: orderItemOrderByWithRelationInput | orderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orderItems.
     */
    cursor?: orderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * orderItem create
   */
  export type orderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a orderItem.
     */
    data: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
  }

  /**
   * orderItem createMany
   */
  export type orderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orderItem createManyAndReturn
   */
  export type orderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to create many orderItems.
     */
    data: orderItemCreateManyInput | orderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem update
   */
  export type orderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a orderItem.
     */
    data: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
    /**
     * Choose, which orderItem to update.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem updateMany
   */
  export type orderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
  }

  /**
   * orderItem updateManyAndReturn
   */
  export type orderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * The data used to update orderItems.
     */
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyInput>
    /**
     * Filter which orderItems to update
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orderItem upsert
   */
  export type orderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the orderItem to update in case it exists.
     */
    where: orderItemWhereUniqueInput
    /**
     * In case the orderItem found by the `where` argument doesn't exist, create a new orderItem with this data.
     */
    create: XOR<orderItemCreateInput, orderItemUncheckedCreateInput>
    /**
     * In case the orderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<orderItemUpdateInput, orderItemUncheckedUpdateInput>
  }

  /**
   * orderItem delete
   */
  export type orderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
    /**
     * Filter which orderItem to delete.
     */
    where: orderItemWhereUniqueInput
  }

  /**
   * orderItem deleteMany
   */
  export type orderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orderItems to delete
     */
    where?: orderItemWhereInput
    /**
     * Limit how many orderItems to delete.
     */
    limit?: number
  }

  /**
   * orderItem.variant
   */
  export type orderItem$variantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the variant
     */
    select?: variantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the variant
     */
    omit?: variantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: variantInclude<ExtArgs> | null
    where?: variantWhereInput
  }

  /**
   * orderItem without action
   */
  export type orderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orderItem
     */
    select?: orderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orderItem
     */
    omit?: orderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: orderItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentType: string | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentDatetime: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    paymentType: string | null
    transactionId: string | null
    status: $Enums.PaymentStatus | null
    paymentDatetime: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    paymentType: number
    transactionId: number
    status: number
    paymentDatetime: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    transactionId?: true
    status?: true
    paymentDatetime?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    transactionId?: true
    status?: true
    paymentDatetime?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    paymentType?: true
    transactionId?: true
    status?: true
    paymentDatetime?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    orderId: number
    paymentType: string
    transactionId: string | null
    status: $Enums.PaymentStatus
    paymentDatetime: Date | null
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    transactionId?: boolean
    status?: boolean
    paymentDatetime?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    transactionId?: boolean
    status?: boolean
    paymentDatetime?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    transactionId?: boolean
    status?: boolean
    paymentDatetime?: boolean
    order?: boolean | orderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    paymentType?: boolean
    transactionId?: boolean
    status?: boolean
    paymentDatetime?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "paymentType" | "transactionId" | "status" | "paymentDatetime", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | orderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$orderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      paymentType: string
      transactionId: string | null
      status: $Enums.PaymentStatus
      paymentDatetime: Date | null
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends orderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, orderDefaultArgs<ExtArgs>>): Prisma__orderClient<$Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly orderId: FieldRef<"Payment", 'Int'>
    readonly paymentType: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paymentDatetime: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    email: 'email',
    password: 'password',
    profile: 'profile',
    role: 'role',
    otp: 'otp',
    otpExpiry: 'otpExpiry',
    resetToken: 'resetToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    image: 'image',
    userId: 'userId',
    stock: 'stock',
    is_new_arrival: 'is_new_arrival',
    is_active: 'is_active',
    tag: 'tag',
    slug: 'slug',
    description: 'description'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    description: 'description',
    specification: 'specification',
    Price: 'Price',
    stock: 'stock',
    productId: 'productId'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const VariantimageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    variantId: 'variantId'
  };

  export type VariantimageScalarFieldEnum = (typeof VariantimageScalarFieldEnum)[keyof typeof VariantimageScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parentId: 'parentId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    variantId: 'variantId',
    quantity: 'quantity',
    addedAt: 'addedAt'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    street: 'street',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    addressType: 'addressType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    guestemail: 'guestemail',
    subTotal: 'subTotal',
    tax: 'tax',
    discount: 'discount',
    deliveryCharge: 'deliveryCharge',
    finalTotal: 'finalTotal',
    billingAddress: 'billingAddress',
    deliveryAddress: 'deliveryAddress',
    status: 'status',
    is_payment_done: 'is_payment_done',
    createdAt: 'createdAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    unitPrice: 'unitPrice',
    quantity: 'quantity',
    variantId: 'variantId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    paymentType: 'paymentType',
    transactionId: 'transactionId',
    status: 'status',
    paymentDatetime: 'paymentDatetime'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'AddressType[]'
   */
  export type ListEnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    age?: IntNullableFilter<"user"> | number | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    profile?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    otp?: StringNullableFilter<"user"> | string | null
    otpExpiry?: DateTimeNullableFilter<"user"> | Date | string | null
    resetToken?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    products?: ProductListRelationFilter
    cart?: CartListRelationFilter
    address?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: productOrderByRelationAggregateInput
    cart?: cartOrderByRelationAggregateInput
    address?: addressOrderByRelationAggregateInput
    orders?: orderOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    age?: IntNullableFilter<"user"> | number | null
    password?: StringFilter<"user"> | string
    profile?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    otp?: StringNullableFilter<"user"> | string | null
    otpExpiry?: DateTimeNullableFilter<"user"> | Date | string | null
    resetToken?: StringNullableFilter<"user"> | string | null
    createdAt?: DateTimeFilter<"user"> | Date | string
    updatedAt?: DateTimeFilter<"user"> | Date | string
    products?: ProductListRelationFilter
    cart?: CartListRelationFilter
    address?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiry?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    age?: IntNullableWithAggregatesFilter<"user"> | number | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    profile?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    otp?: StringNullableWithAggregatesFilter<"user"> | string | null
    otpExpiry?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"user"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    userId?: IntFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    is_new_arrival?: BoolFilter<"product"> | boolean
    is_active?: BoolFilter<"product"> | boolean
    tag?: StringNullableListFilter<"product">
    slug?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
    categories?: CategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    variants?: VariantListRelationFilter
    cartItem?: CartItemListRelationFilter
    order?: OrderItemListRelationFilter
  }

  export type productOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    userId?: SortOrder
    stock?: SortOrder
    is_new_arrival?: SortOrder
    is_active?: SortOrder
    tag?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    categories?: categoryOrderByRelationAggregateInput
    user?: userOrderByWithRelationInput
    variants?: variantOrderByRelationAggregateInput
    cartItem?: cartItemOrderByRelationAggregateInput
    order?: orderItemOrderByRelationAggregateInput
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    userId?: IntFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    is_new_arrival?: BoolFilter<"product"> | boolean
    is_active?: BoolFilter<"product"> | boolean
    tag?: StringNullableListFilter<"product">
    description?: StringFilter<"product"> | string
    categories?: CategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    variants?: VariantListRelationFilter
    cartItem?: CartItemListRelationFilter
    order?: OrderItemListRelationFilter
  }, "id" | "slug">

  export type productOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrderInput | SortOrder
    userId?: SortOrder
    stock?: SortOrder
    is_new_arrival?: SortOrder
    is_active?: SortOrder
    tag?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    price?: FloatWithAggregatesFilter<"product"> | number
    image?: StringNullableWithAggregatesFilter<"product"> | string | null
    userId?: IntWithAggregatesFilter<"product"> | number
    stock?: IntWithAggregatesFilter<"product"> | number
    is_new_arrival?: BoolWithAggregatesFilter<"product"> | boolean
    is_active?: BoolWithAggregatesFilter<"product"> | boolean
    tag?: StringNullableListFilter<"product">
    slug?: StringWithAggregatesFilter<"product"> | string
    description?: StringWithAggregatesFilter<"product"> | string
  }

  export type variantWhereInput = {
    AND?: variantWhereInput | variantWhereInput[]
    OR?: variantWhereInput[]
    NOT?: variantWhereInput | variantWhereInput[]
    id?: IntFilter<"variant"> | number
    description?: StringFilter<"variant"> | string
    specification?: JsonFilter<"variant">
    Price?: FloatFilter<"variant"> | number
    stock?: IntFilter<"variant"> | number
    productId?: IntFilter<"variant"> | number
    images?: VariantimageListRelationFilter
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    cartItem?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type variantOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
    images?: variantimageOrderByRelationAggregateInput
    product?: productOrderByWithRelationInput
    cartItem?: cartItemOrderByRelationAggregateInput
    orderItems?: orderItemOrderByRelationAggregateInput
  }

  export type variantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variantWhereInput | variantWhereInput[]
    OR?: variantWhereInput[]
    NOT?: variantWhereInput | variantWhereInput[]
    description?: StringFilter<"variant"> | string
    specification?: JsonFilter<"variant">
    Price?: FloatFilter<"variant"> | number
    stock?: IntFilter<"variant"> | number
    productId?: IntFilter<"variant"> | number
    images?: VariantimageListRelationFilter
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
    cartItem?: CartItemListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type variantOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
    _count?: variantCountOrderByAggregateInput
    _avg?: variantAvgOrderByAggregateInput
    _max?: variantMaxOrderByAggregateInput
    _min?: variantMinOrderByAggregateInput
    _sum?: variantSumOrderByAggregateInput
  }

  export type variantScalarWhereWithAggregatesInput = {
    AND?: variantScalarWhereWithAggregatesInput | variantScalarWhereWithAggregatesInput[]
    OR?: variantScalarWhereWithAggregatesInput[]
    NOT?: variantScalarWhereWithAggregatesInput | variantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variant"> | number
    description?: StringWithAggregatesFilter<"variant"> | string
    specification?: JsonWithAggregatesFilter<"variant">
    Price?: FloatWithAggregatesFilter<"variant"> | number
    stock?: IntWithAggregatesFilter<"variant"> | number
    productId?: IntWithAggregatesFilter<"variant"> | number
  }

  export type variantimageWhereInput = {
    AND?: variantimageWhereInput | variantimageWhereInput[]
    OR?: variantimageWhereInput[]
    NOT?: variantimageWhereInput | variantimageWhereInput[]
    id?: IntFilter<"variantimage"> | number
    url?: StringFilter<"variantimage"> | string
    variantId?: IntFilter<"variantimage"> | number
    variant?: XOR<VariantScalarRelationFilter, variantWhereInput>
  }

  export type variantimageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    variantId?: SortOrder
    variant?: variantOrderByWithRelationInput
  }

  export type variantimageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: variantimageWhereInput | variantimageWhereInput[]
    OR?: variantimageWhereInput[]
    NOT?: variantimageWhereInput | variantimageWhereInput[]
    url?: StringFilter<"variantimage"> | string
    variantId?: IntFilter<"variantimage"> | number
    variant?: XOR<VariantScalarRelationFilter, variantWhereInput>
  }, "id">

  export type variantimageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    variantId?: SortOrder
    _count?: variantimageCountOrderByAggregateInput
    _avg?: variantimageAvgOrderByAggregateInput
    _max?: variantimageMaxOrderByAggregateInput
    _min?: variantimageMinOrderByAggregateInput
    _sum?: variantimageSumOrderByAggregateInput
  }

  export type variantimageScalarWhereWithAggregatesInput = {
    AND?: variantimageScalarWhereWithAggregatesInput | variantimageScalarWhereWithAggregatesInput[]
    OR?: variantimageScalarWhereWithAggregatesInput[]
    NOT?: variantimageScalarWhereWithAggregatesInput | variantimageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"variantimage"> | number
    url?: StringWithAggregatesFilter<"variantimage"> | string
    variantId?: IntWithAggregatesFilter<"variantimage"> | number
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    parentId?: IntNullableFilter<"category"> | number | null
    parent?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: categoryOrderByWithRelationInput
    subcategories?: categoryOrderByRelationAggregateInput
    products?: productOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    parentId?: IntNullableFilter<"category"> | number | null
    parent?: XOR<CategoryNullableScalarRelationFilter, categoryWhereInput> | null
    subcategories?: CategoryListRelationFilter
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: categoryCountOrderByAggregateInput
    _avg?: categoryAvgOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
    _sum?: categorySumOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"category"> | number
    name?: StringWithAggregatesFilter<"category"> | string
    parentId?: IntNullableWithAggregatesFilter<"category"> | number | null
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    id?: IntFilter<"cart"> | number
    userId?: IntFilter<"cart"> | number
    createdAt?: DateTimeFilter<"cart"> | Date | string
    updatedAt?: DateTimeFilter<"cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    items?: CartItemListRelationFilter
  }

  export type cartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
    items?: cartItemOrderByRelationAggregateInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    createdAt?: DateTimeFilter<"cart"> | Date | string
    updatedAt?: DateTimeFilter<"cart"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    items?: CartItemListRelationFilter
  }, "id" | "userId">

  export type cartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart"> | number
    userId?: IntWithAggregatesFilter<"cart"> | number
    createdAt?: DateTimeWithAggregatesFilter<"cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"cart"> | Date | string
  }

  export type cartItemWhereInput = {
    AND?: cartItemWhereInput | cartItemWhereInput[]
    OR?: cartItemWhereInput[]
    NOT?: cartItemWhereInput | cartItemWhereInput[]
    id?: IntFilter<"cartItem"> | number
    cartId?: IntFilter<"cartItem"> | number
    productId?: IntNullableFilter<"cartItem"> | number | null
    variantId?: IntNullableFilter<"cartItem"> | number | null
    quantity?: IntFilter<"cartItem"> | number
    addedAt?: DateTimeFilter<"cartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, productWhereInput> | null
    variant?: XOR<VariantNullableScalarRelationFilter, variantWhereInput> | null
  }

  export type cartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    addedAt?: SortOrder
    cart?: cartOrderByWithRelationInput
    product?: productOrderByWithRelationInput
    variant?: variantOrderByWithRelationInput
  }

  export type cartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartItemWhereInput | cartItemWhereInput[]
    OR?: cartItemWhereInput[]
    NOT?: cartItemWhereInput | cartItemWhereInput[]
    cartId?: IntFilter<"cartItem"> | number
    productId?: IntNullableFilter<"cartItem"> | number | null
    variantId?: IntNullableFilter<"cartItem"> | number | null
    quantity?: IntFilter<"cartItem"> | number
    addedAt?: DateTimeFilter<"cartItem"> | Date | string
    cart?: XOR<CartScalarRelationFilter, cartWhereInput>
    product?: XOR<ProductNullableScalarRelationFilter, productWhereInput> | null
    variant?: XOR<VariantNullableScalarRelationFilter, variantWhereInput> | null
  }, "id">

  export type cartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrderInput | SortOrder
    variantId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    addedAt?: SortOrder
    _count?: cartItemCountOrderByAggregateInput
    _avg?: cartItemAvgOrderByAggregateInput
    _max?: cartItemMaxOrderByAggregateInput
    _min?: cartItemMinOrderByAggregateInput
    _sum?: cartItemSumOrderByAggregateInput
  }

  export type cartItemScalarWhereWithAggregatesInput = {
    AND?: cartItemScalarWhereWithAggregatesInput | cartItemScalarWhereWithAggregatesInput[]
    OR?: cartItemScalarWhereWithAggregatesInput[]
    NOT?: cartItemScalarWhereWithAggregatesInput | cartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cartItem"> | number
    cartId?: IntWithAggregatesFilter<"cartItem"> | number
    productId?: IntNullableWithAggregatesFilter<"cartItem"> | number | null
    variantId?: IntNullableWithAggregatesFilter<"cartItem"> | number | null
    quantity?: IntWithAggregatesFilter<"cartItem"> | number
    addedAt?: DateTimeWithAggregatesFilter<"cartItem"> | Date | string
  }

  export type addressWhereInput = {
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    id?: IntFilter<"address"> | number
    userId?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    postalCode?: StringFilter<"address"> | string
    country?: StringFilter<"address"> | string
    addressType?: EnumAddressTypeFilter<"address"> | $Enums.AddressType
    createdAt?: DateTimeFilter<"address"> | Date | string
    updatedAt?: DateTimeFilter<"address"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type addressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: userOrderByWithRelationInput
  }

  export type addressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressWhereInput | addressWhereInput[]
    OR?: addressWhereInput[]
    NOT?: addressWhereInput | addressWhereInput[]
    userId?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    postalCode?: StringFilter<"address"> | string
    country?: StringFilter<"address"> | string
    addressType?: EnumAddressTypeFilter<"address"> | $Enums.AddressType
    createdAt?: DateTimeFilter<"address"> | Date | string
    updatedAt?: DateTimeFilter<"address"> | Date | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type addressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: addressCountOrderByAggregateInput
    _avg?: addressAvgOrderByAggregateInput
    _max?: addressMaxOrderByAggregateInput
    _min?: addressMinOrderByAggregateInput
    _sum?: addressSumOrderByAggregateInput
  }

  export type addressScalarWhereWithAggregatesInput = {
    AND?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    OR?: addressScalarWhereWithAggregatesInput[]
    NOT?: addressScalarWhereWithAggregatesInput | addressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"address"> | number
    userId?: IntWithAggregatesFilter<"address"> | number
    street?: StringWithAggregatesFilter<"address"> | string
    city?: StringWithAggregatesFilter<"address"> | string
    state?: StringWithAggregatesFilter<"address"> | string
    postalCode?: StringWithAggregatesFilter<"address"> | string
    country?: StringWithAggregatesFilter<"address"> | string
    addressType?: EnumAddressTypeWithAggregatesFilter<"address"> | $Enums.AddressType
    createdAt?: DateTimeWithAggregatesFilter<"address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"address"> | Date | string
  }

  export type orderWhereInput = {
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    id?: IntFilter<"order"> | number
    userId?: IntNullableFilter<"order"> | number | null
    guestemail?: StringNullableFilter<"order"> | string | null
    subTotal?: FloatFilter<"order"> | number
    tax?: FloatFilter<"order"> | number
    discount?: FloatFilter<"order"> | number
    deliveryCharge?: FloatFilter<"order"> | number
    finalTotal?: FloatFilter<"order"> | number
    billingAddress?: StringFilter<"order"> | string
    deliveryAddress?: StringFilter<"order"> | string
    status?: EnumOrderStatusFilter<"order"> | $Enums.OrderStatus
    is_payment_done?: BoolFilter<"order"> | boolean
    createdAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type orderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestemail?: SortOrderInput | SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
    billingAddress?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    is_payment_done?: SortOrder
    createdAt?: SortOrder
    user?: userOrderByWithRelationInput
    orderItems?: orderItemOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type orderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderWhereInput | orderWhereInput[]
    OR?: orderWhereInput[]
    NOT?: orderWhereInput | orderWhereInput[]
    userId?: IntNullableFilter<"order"> | number | null
    guestemail?: StringNullableFilter<"order"> | string | null
    subTotal?: FloatFilter<"order"> | number
    tax?: FloatFilter<"order"> | number
    discount?: FloatFilter<"order"> | number
    deliveryCharge?: FloatFilter<"order"> | number
    finalTotal?: FloatFilter<"order"> | number
    billingAddress?: StringFilter<"order"> | string
    deliveryAddress?: StringFilter<"order"> | string
    status?: EnumOrderStatusFilter<"order"> | $Enums.OrderStatus
    is_payment_done?: BoolFilter<"order"> | boolean
    createdAt?: DateTimeFilter<"order"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id">

  export type orderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    guestemail?: SortOrderInput | SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
    billingAddress?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    is_payment_done?: SortOrder
    createdAt?: SortOrder
    _count?: orderCountOrderByAggregateInput
    _avg?: orderAvgOrderByAggregateInput
    _max?: orderMaxOrderByAggregateInput
    _min?: orderMinOrderByAggregateInput
    _sum?: orderSumOrderByAggregateInput
  }

  export type orderScalarWhereWithAggregatesInput = {
    AND?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    OR?: orderScalarWhereWithAggregatesInput[]
    NOT?: orderScalarWhereWithAggregatesInput | orderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order"> | number
    userId?: IntNullableWithAggregatesFilter<"order"> | number | null
    guestemail?: StringNullableWithAggregatesFilter<"order"> | string | null
    subTotal?: FloatWithAggregatesFilter<"order"> | number
    tax?: FloatWithAggregatesFilter<"order"> | number
    discount?: FloatWithAggregatesFilter<"order"> | number
    deliveryCharge?: FloatWithAggregatesFilter<"order"> | number
    finalTotal?: FloatWithAggregatesFilter<"order"> | number
    billingAddress?: StringWithAggregatesFilter<"order"> | string
    deliveryAddress?: StringWithAggregatesFilter<"order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"order"> | $Enums.OrderStatus
    is_payment_done?: BoolWithAggregatesFilter<"order"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"order"> | Date | string
  }

  export type orderItemWhereInput = {
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    id?: IntFilter<"orderItem"> | number
    orderId?: IntFilter<"orderItem"> | number
    productId?: IntFilter<"orderItem"> | number
    unitPrice?: FloatFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
    variant?: XOR<VariantNullableScalarRelationFilter, variantWhereInput> | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }

  export type orderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrderInput | SortOrder
    variant?: variantOrderByWithRelationInput
    order?: orderOrderByWithRelationInput
    product?: productOrderByWithRelationInput
  }

  export type orderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: orderItemWhereInput | orderItemWhereInput[]
    OR?: orderItemWhereInput[]
    NOT?: orderItemWhereInput | orderItemWhereInput[]
    orderId?: IntFilter<"orderItem"> | number
    productId?: IntFilter<"orderItem"> | number
    unitPrice?: FloatFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
    variant?: XOR<VariantNullableScalarRelationFilter, variantWhereInput> | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
    product?: XOR<ProductScalarRelationFilter, productWhereInput>
  }, "id">

  export type orderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrderInput | SortOrder
    _count?: orderItemCountOrderByAggregateInput
    _avg?: orderItemAvgOrderByAggregateInput
    _max?: orderItemMaxOrderByAggregateInput
    _min?: orderItemMinOrderByAggregateInput
    _sum?: orderItemSumOrderByAggregateInput
  }

  export type orderItemScalarWhereWithAggregatesInput = {
    AND?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    OR?: orderItemScalarWhereWithAggregatesInput[]
    NOT?: orderItemScalarWhereWithAggregatesInput | orderItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orderItem"> | number
    orderId?: IntWithAggregatesFilter<"orderItem"> | number
    productId?: IntWithAggregatesFilter<"orderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"orderItem"> | number
    quantity?: IntWithAggregatesFilter<"orderItem"> | number
    variantId?: IntNullableWithAggregatesFilter<"orderItem"> | number | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    orderId?: IntFilter<"Payment"> | number
    paymentType?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentDatetime?: DateTimeNullableFilter<"Payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentDatetime?: SortOrderInput | SortOrder
    order?: orderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    paymentType?: StringFilter<"Payment"> | string
    transactionId?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paymentDatetime?: DateTimeNullableFilter<"Payment"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, orderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    transactionId?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentDatetime?: SortOrderInput | SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    orderId?: IntWithAggregatesFilter<"Payment"> | number
    paymentType?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paymentDatetime?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
  }

  export type userCreateInput = {
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productCreateInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryCreateNestedManyWithoutProductsInput
    user: userCreateNestedOneWithoutProductsInput
    variants?: variantCreateNestedManyWithoutProductInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    order?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryUncheckedCreateNestedManyWithoutProductsInput
    variants?: variantUncheckedCreateNestedManyWithoutProductInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    order?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUpdateManyWithoutProductsNestedInput
    user?: userUpdateOneRequiredWithoutProductsNestedInput
    variants?: variantUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    order?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUncheckedUpdateManyWithoutProductsNestedInput
    variants?: variantUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    order?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productCreateManyInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type productUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type variantCreateInput = {
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    images?: variantimageCreateNestedManyWithoutVariantInput
    product: productCreateNestedOneWithoutVariantsInput
    cartItem?: cartItemCreateNestedManyWithoutVariantInput
    orderItems?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type variantUncheckedCreateInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    productId: number
    images?: variantimageUncheckedCreateNestedManyWithoutVariantInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type variantUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    images?: variantimageUpdateManyWithoutVariantNestedInput
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
    cartItem?: cartItemUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    images?: variantimageUncheckedUpdateManyWithoutVariantNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type variantCreateManyInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    productId: number
  }

  export type variantUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type variantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type variantimageCreateInput = {
    url: string
    variant: variantCreateNestedOneWithoutImagesInput
  }

  export type variantimageUncheckedCreateInput = {
    id?: number
    url: string
    variantId: number
  }

  export type variantimageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    variant?: variantUpdateOneRequiredWithoutImagesNestedInput
  }

  export type variantimageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
  }

  export type variantimageCreateManyInput = {
    id?: number
    url: string
    variantId: number
  }

  export type variantimageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type variantimageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    variantId?: IntFieldUpdateOperationsInput | number
  }

  export type categoryCreateInput = {
    name: string
    parent?: categoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: categoryCreateNestedManyWithoutParentInput
    products?: productCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUncheckedCreateInput = {
    id?: number
    name: string
    parentId?: number | null
    subcategories?: categoryUncheckedCreateNestedManyWithoutParentInput
    products?: productUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: categoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: categoryUpdateManyWithoutParentNestedInput
    products?: productUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    subcategories?: categoryUncheckedUpdateManyWithoutParentNestedInput
    products?: productUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryCreateManyInput = {
    id?: number
    name: string
    parentId?: number | null
  }

  export type categoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutCartInput
    items?: cartItemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCartNestedInput
    items?: cartItemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartCreateManyInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cartUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemCreateInput = {
    quantity?: number
    addedAt?: Date | string
    cart: cartCreateNestedOneWithoutItemsInput
    product?: productCreateNestedOneWithoutCartItemInput
    variant?: variantCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateInput = {
    id?: number
    cartId: number
    productId?: number | null
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateOneRequiredWithoutItemsNestedInput
    product?: productUpdateOneWithoutCartItemNestedInput
    variant?: variantUpdateOneWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemCreateManyInput = {
    id?: number
    cartId: number
    productId?: number | null
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressCreateInput = {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutAddressInput
  }

  export type addressUncheckedCreateInput = {
    id?: number
    userId: number
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type addressUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutAddressNestedInput
  }

  export type addressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressCreateManyInput = {
    id?: number
    userId: number
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type addressUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderCreateInput = {
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
    orderItems?: orderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateInput = {
    id?: number
    userId?: number | null
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    orderItems?: orderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type orderUpdateInput = {
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
    orderItems?: orderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type orderCreateManyInput = {
    id?: number
    userId?: number | null
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
  }

  export type orderUpdateManyMutationInput = {
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemCreateInput = {
    unitPrice: number
    quantity: number
    variant?: variantCreateNestedOneWithoutOrderItemsInput
    order: orderCreateNestedOneWithoutOrderItemsInput
    product: productCreateNestedOneWithoutOrderInput
  }

  export type orderItemUncheckedCreateInput = {
    id?: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type orderItemUpdateInput = {
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variant?: variantUpdateOneWithoutOrderItemsNestedInput
    order?: orderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: productUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderItemCreateManyInput = {
    id?: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type orderItemUpdateManyMutationInput = {
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateInput = {
    paymentType: string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentDatetime?: Date | string | null
    order: orderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    orderId: number
    paymentType: string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentDatetime?: Date | string | null
  }

  export type PaymentUpdateInput = {
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: orderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentCreateManyInput = {
    id?: number
    orderId: number
    paymentType: string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentDatetime?: Date | string | null
  }

  export type PaymentUpdateManyMutationInput = {
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: productWhereInput
    some?: productWhereInput
    none?: productWhereInput
  }

  export type CartListRelationFilter = {
    every?: cartWhereInput
    some?: cartWhereInput
    none?: cartWhereInput
  }

  export type AddressListRelationFilter = {
    every?: addressWhereInput
    some?: addressWhereInput
    none?: addressWhereInput
  }

  export type OrderListRelationFilter = {
    every?: orderWhereInput
    some?: orderWhereInput
    none?: orderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    otpExpiry?: SortOrder
    resetToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type VariantListRelationFilter = {
    every?: variantWhereInput
    some?: variantWhereInput
    none?: variantWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: cartItemWhereInput
    some?: cartItemWhereInput
    none?: cartItemWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: orderItemWhereInput
    some?: orderItemWhereInput
    none?: orderItemWhereInput
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type variantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type orderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    stock?: SortOrder
    is_new_arrival?: SortOrder
    is_active?: SortOrder
    tag?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    stock?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    stock?: SortOrder
    is_new_arrival?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    image?: SortOrder
    userId?: SortOrder
    stock?: SortOrder
    is_new_arrival?: SortOrder
    is_active?: SortOrder
    slug?: SortOrder
    description?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type VariantimageListRelationFilter = {
    every?: variantimageWhereInput
    some?: variantimageWhereInput
    none?: variantimageWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: productWhereInput
    isNot?: productWhereInput
  }

  export type variantimageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type variantCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    specification?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type variantAvgOrderByAggregateInput = {
    id?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type variantMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type variantMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }

  export type variantSumOrderByAggregateInput = {
    id?: SortOrder
    Price?: SortOrder
    stock?: SortOrder
    productId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type VariantScalarRelationFilter = {
    is?: variantWhereInput
    isNot?: variantWhereInput
  }

  export type variantimageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    variantId?: SortOrder
  }

  export type variantimageAvgOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
  }

  export type variantimageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    variantId?: SortOrder
  }

  export type variantimageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    variantId?: SortOrder
  }

  export type variantimageSumOrderByAggregateInput = {
    id?: SortOrder
    variantId?: SortOrder
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: categoryWhereInput | null
    isNot?: categoryWhereInput | null
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type categoryAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
  }

  export type categorySumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
  }

  export type cartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: cartWhereInput
    isNot?: cartWhereInput
  }

  export type ProductNullableScalarRelationFilter = {
    is?: productWhereInput | null
    isNot?: productWhereInput | null
  }

  export type VariantNullableScalarRelationFilter = {
    is?: variantWhereInput | null
    isNot?: variantWhereInput | null
  }

  export type cartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    addedAt?: SortOrder
  }

  export type cartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
  }

  export type cartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    addedAt?: SortOrder
  }

  export type cartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
    addedAt?: SortOrder
  }

  export type cartItemSumOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    variantId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type addressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type addressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type addressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type addressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    addressType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type addressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type orderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    guestemail?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
    billingAddress?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    is_payment_done?: SortOrder
    createdAt?: SortOrder
  }

  export type orderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
  }

  export type orderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    guestemail?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
    billingAddress?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    is_payment_done?: SortOrder
    createdAt?: SortOrder
  }

  export type orderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    guestemail?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
    billingAddress?: SortOrder
    deliveryAddress?: SortOrder
    status?: SortOrder
    is_payment_done?: SortOrder
    createdAt?: SortOrder
  }

  export type orderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subTotal?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    deliveryCharge?: SortOrder
    finalTotal?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: orderWhereInput
    isNot?: orderWhereInput
  }

  export type orderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrder
  }

  export type orderItemAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrder
  }

  export type orderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrder
  }

  export type orderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrder
  }

  export type orderItemSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    unitPrice?: SortOrder
    quantity?: SortOrder
    variantId?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentDatetime?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentDatetime?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    paymentType?: SortOrder
    transactionId?: SortOrder
    status?: SortOrder
    paymentDatetime?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type productCreateNestedManyWithoutUserInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type cartCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type addressCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type orderCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type cartUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
  }

  export type addressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
  }

  export type orderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productUpdateManyWithoutUserNestedInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    upsert?: productUpsertWithWhereUniqueWithoutUserInput | productUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutUserInput | productUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: productUpdateManyWithWhereWithoutUserInput | productUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type cartUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type addressUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type orderUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput> | productCreateWithoutUserInput[] | productUncheckedCreateWithoutUserInput[]
    connectOrCreate?: productCreateOrConnectWithoutUserInput | productCreateOrConnectWithoutUserInput[]
    upsert?: productUpsertWithWhereUniqueWithoutUserInput | productUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: productCreateManyUserInputEnvelope
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutUserInput | productUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: productUpdateManyWithWhereWithoutUserInput | productUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type cartUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput> | cartCreateWithoutUserInput[] | cartUncheckedCreateWithoutUserInput[]
    connectOrCreate?: cartCreateOrConnectWithoutUserInput | cartCreateOrConnectWithoutUserInput[]
    upsert?: cartUpsertWithWhereUniqueWithoutUserInput | cartUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: cartCreateManyUserInputEnvelope
    set?: cartWhereUniqueInput | cartWhereUniqueInput[]
    disconnect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    delete?: cartWhereUniqueInput | cartWhereUniqueInput[]
    connect?: cartWhereUniqueInput | cartWhereUniqueInput[]
    update?: cartUpdateWithWhereUniqueWithoutUserInput | cartUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: cartUpdateManyWithWhereWithoutUserInput | cartUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: cartScalarWhereInput | cartScalarWhereInput[]
  }

  export type addressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput> | addressCreateWithoutUserInput[] | addressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: addressCreateOrConnectWithoutUserInput | addressCreateOrConnectWithoutUserInput[]
    upsert?: addressUpsertWithWhereUniqueWithoutUserInput | addressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: addressCreateManyUserInputEnvelope
    set?: addressWhereUniqueInput | addressWhereUniqueInput[]
    disconnect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    delete?: addressWhereUniqueInput | addressWhereUniqueInput[]
    connect?: addressWhereUniqueInput | addressWhereUniqueInput[]
    update?: addressUpdateWithWhereUniqueWithoutUserInput | addressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: addressUpdateManyWithWhereWithoutUserInput | addressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: addressScalarWhereInput | addressScalarWhereInput[]
  }

  export type orderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput> | orderCreateWithoutUserInput[] | orderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: orderCreateOrConnectWithoutUserInput | orderCreateOrConnectWithoutUserInput[]
    upsert?: orderUpsertWithWhereUniqueWithoutUserInput | orderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: orderCreateManyUserInputEnvelope
    set?: orderWhereUniqueInput | orderWhereUniqueInput[]
    disconnect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    delete?: orderWhereUniqueInput | orderWhereUniqueInput[]
    connect?: orderWhereUniqueInput | orderWhereUniqueInput[]
    update?: orderUpdateWithWhereUniqueWithoutUserInput | orderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: orderUpdateManyWithWhereWithoutUserInput | orderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: orderScalarWhereInput | orderScalarWhereInput[]
  }

  export type productCreatetagInput = {
    set: string[]
  }

  export type categoryCreateNestedManyWithoutProductsInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput> | categoryCreateWithoutProductsInput[] | categoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput | categoryCreateOrConnectWithoutProductsInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type userCreateNestedOneWithoutProductsInput = {
    create?: XOR<userCreateWithoutProductsInput, userUncheckedCreateWithoutProductsInput>
    connectOrCreate?: userCreateOrConnectWithoutProductsInput
    connect?: userWhereUniqueInput
  }

  export type variantCreateNestedManyWithoutProductInput = {
    create?: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput> | variantCreateWithoutProductInput[] | variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: variantCreateOrConnectWithoutProductInput | variantCreateOrConnectWithoutProductInput[]
    createMany?: variantCreateManyProductInputEnvelope
    connect?: variantWhereUniqueInput | variantWhereUniqueInput[]
  }

  export type cartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type orderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput> | categoryCreateWithoutProductsInput[] | categoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput | categoryCreateOrConnectWithoutProductsInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type variantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput> | variantCreateWithoutProductInput[] | variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: variantCreateOrConnectWithoutProductInput | variantCreateOrConnectWithoutProductInput[]
    createMany?: variantCreateManyProductInputEnvelope
    connect?: variantWhereUniqueInput | variantWhereUniqueInput[]
  }

  export type cartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type productUpdatetagInput = {
    set?: string[]
    push?: string | string[]
  }

  export type categoryUpdateManyWithoutProductsNestedInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput> | categoryCreateWithoutProductsInput[] | categoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput | categoryCreateOrConnectWithoutProductsInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutProductsInput | categoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutProductsInput | categoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutProductsInput | categoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type userUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<userCreateWithoutProductsInput, userUncheckedCreateWithoutProductsInput>
    connectOrCreate?: userCreateOrConnectWithoutProductsInput
    upsert?: userUpsertWithoutProductsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutProductsInput, userUpdateWithoutProductsInput>, userUncheckedUpdateWithoutProductsInput>
  }

  export type variantUpdateManyWithoutProductNestedInput = {
    create?: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput> | variantCreateWithoutProductInput[] | variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: variantCreateOrConnectWithoutProductInput | variantCreateOrConnectWithoutProductInput[]
    upsert?: variantUpsertWithWhereUniqueWithoutProductInput | variantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: variantCreateManyProductInputEnvelope
    set?: variantWhereUniqueInput | variantWhereUniqueInput[]
    disconnect?: variantWhereUniqueInput | variantWhereUniqueInput[]
    delete?: variantWhereUniqueInput | variantWhereUniqueInput[]
    connect?: variantWhereUniqueInput | variantWhereUniqueInput[]
    update?: variantUpdateWithWhereUniqueWithoutProductInput | variantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: variantUpdateManyWithWhereWithoutProductInput | variantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: variantScalarWhereInput | variantScalarWhereInput[]
  }

  export type cartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutProductInput | cartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutProductInput | cartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutProductInput | cartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type orderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput> | categoryCreateWithoutProductsInput[] | categoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutProductsInput | categoryCreateOrConnectWithoutProductsInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutProductsInput | categoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutProductsInput | categoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutProductsInput | categoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type variantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput> | variantCreateWithoutProductInput[] | variantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: variantCreateOrConnectWithoutProductInput | variantCreateOrConnectWithoutProductInput[]
    upsert?: variantUpsertWithWhereUniqueWithoutProductInput | variantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: variantCreateManyProductInputEnvelope
    set?: variantWhereUniqueInput | variantWhereUniqueInput[]
    disconnect?: variantWhereUniqueInput | variantWhereUniqueInput[]
    delete?: variantWhereUniqueInput | variantWhereUniqueInput[]
    connect?: variantWhereUniqueInput | variantWhereUniqueInput[]
    update?: variantUpdateWithWhereUniqueWithoutProductInput | variantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: variantUpdateManyWithWhereWithoutProductInput | variantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: variantScalarWhereInput | variantScalarWhereInput[]
  }

  export type cartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutProductInput | cartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutProductInput | cartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutProductInput | cartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput> | orderItemCreateWithoutProductInput[] | orderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutProductInput | orderItemCreateOrConnectWithoutProductInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutProductInput | orderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: orderItemCreateManyProductInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutProductInput | orderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutProductInput | orderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type variantimageCreateNestedManyWithoutVariantInput = {
    create?: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput> | variantimageCreateWithoutVariantInput[] | variantimageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: variantimageCreateOrConnectWithoutVariantInput | variantimageCreateOrConnectWithoutVariantInput[]
    createMany?: variantimageCreateManyVariantInputEnvelope
    connect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
  }

  export type productCreateNestedOneWithoutVariantsInput = {
    create?: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productCreateOrConnectWithoutVariantsInput
    connect?: productWhereUniqueInput
  }

  export type cartItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput> | cartItemCreateWithoutVariantInput[] | cartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutVariantInput | cartItemCreateOrConnectWithoutVariantInput[]
    createMany?: cartItemCreateManyVariantInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type orderItemCreateNestedManyWithoutVariantInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type variantimageUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput> | variantimageCreateWithoutVariantInput[] | variantimageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: variantimageCreateOrConnectWithoutVariantInput | variantimageCreateOrConnectWithoutVariantInput[]
    createMany?: variantimageCreateManyVariantInputEnvelope
    connect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
  }

  export type cartItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput> | cartItemCreateWithoutVariantInput[] | cartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutVariantInput | cartItemCreateOrConnectWithoutVariantInput[]
    createMany?: cartItemCreateManyVariantInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type orderItemUncheckedCreateNestedManyWithoutVariantInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type variantimageUpdateManyWithoutVariantNestedInput = {
    create?: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput> | variantimageCreateWithoutVariantInput[] | variantimageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: variantimageCreateOrConnectWithoutVariantInput | variantimageCreateOrConnectWithoutVariantInput[]
    upsert?: variantimageUpsertWithWhereUniqueWithoutVariantInput | variantimageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: variantimageCreateManyVariantInputEnvelope
    set?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    disconnect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    delete?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    connect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    update?: variantimageUpdateWithWhereUniqueWithoutVariantInput | variantimageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: variantimageUpdateManyWithWhereWithoutVariantInput | variantimageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: variantimageScalarWhereInput | variantimageScalarWhereInput[]
  }

  export type productUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: productCreateOrConnectWithoutVariantsInput
    upsert?: productUpsertWithoutVariantsInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutVariantsInput, productUpdateWithoutVariantsInput>, productUncheckedUpdateWithoutVariantsInput>
  }

  export type cartItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput> | cartItemCreateWithoutVariantInput[] | cartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutVariantInput | cartItemCreateOrConnectWithoutVariantInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutVariantInput | cartItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: cartItemCreateManyVariantInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutVariantInput | cartItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutVariantInput | cartItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type orderItemUpdateManyWithoutVariantNestedInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutVariantInput | orderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutVariantInput | orderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutVariantInput | orderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type variantimageUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput> | variantimageCreateWithoutVariantInput[] | variantimageUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: variantimageCreateOrConnectWithoutVariantInput | variantimageCreateOrConnectWithoutVariantInput[]
    upsert?: variantimageUpsertWithWhereUniqueWithoutVariantInput | variantimageUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: variantimageCreateManyVariantInputEnvelope
    set?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    disconnect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    delete?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    connect?: variantimageWhereUniqueInput | variantimageWhereUniqueInput[]
    update?: variantimageUpdateWithWhereUniqueWithoutVariantInput | variantimageUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: variantimageUpdateManyWithWhereWithoutVariantInput | variantimageUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: variantimageScalarWhereInput | variantimageScalarWhereInput[]
  }

  export type cartItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput> | cartItemCreateWithoutVariantInput[] | cartItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutVariantInput | cartItemCreateOrConnectWithoutVariantInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutVariantInput | cartItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: cartItemCreateManyVariantInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutVariantInput | cartItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutVariantInput | cartItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type orderItemUncheckedUpdateManyWithoutVariantNestedInput = {
    create?: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput> | orderItemCreateWithoutVariantInput[] | orderItemUncheckedCreateWithoutVariantInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutVariantInput | orderItemCreateOrConnectWithoutVariantInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutVariantInput | orderItemUpsertWithWhereUniqueWithoutVariantInput[]
    createMany?: orderItemCreateManyVariantInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutVariantInput | orderItemUpdateWithWhereUniqueWithoutVariantInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutVariantInput | orderItemUpdateManyWithWhereWithoutVariantInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type variantCreateNestedOneWithoutImagesInput = {
    create?: XOR<variantCreateWithoutImagesInput, variantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: variantCreateOrConnectWithoutImagesInput
    connect?: variantWhereUniqueInput
  }

  export type variantUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<variantCreateWithoutImagesInput, variantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: variantCreateOrConnectWithoutImagesInput
    upsert?: variantUpsertWithoutImagesInput
    connect?: variantWhereUniqueInput
    update?: XOR<XOR<variantUpdateToOneWithWhereWithoutImagesInput, variantUpdateWithoutImagesInput>, variantUncheckedUpdateWithoutImagesInput>
  }

  export type categoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<categoryCreateWithoutSubcategoriesInput, categoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutSubcategoriesInput
    connect?: categoryWhereUniqueInput
  }

  export type categoryCreateNestedManyWithoutParentInput = {
    create?: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput> | categoryCreateWithoutParentInput[] | categoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentInput | categoryCreateOrConnectWithoutParentInput[]
    createMany?: categoryCreateManyParentInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput> | productCreateWithoutCategoriesInput[] | productUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoriesInput | productCreateOrConnectWithoutCategoriesInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput> | categoryCreateWithoutParentInput[] | categoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentInput | categoryCreateOrConnectWithoutParentInput[]
    createMany?: categoryCreateManyParentInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type productUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput> | productCreateWithoutCategoriesInput[] | productUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoriesInput | productCreateOrConnectWithoutCategoriesInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
  }

  export type categoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<categoryCreateWithoutSubcategoriesInput, categoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: categoryUpsertWithoutSubcategoriesInput
    disconnect?: categoryWhereInput | boolean
    delete?: categoryWhereInput | boolean
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutSubcategoriesInput, categoryUpdateWithoutSubcategoriesInput>, categoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type categoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput> | categoryCreateWithoutParentInput[] | categoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentInput | categoryCreateOrConnectWithoutParentInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutParentInput | categoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: categoryCreateManyParentInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutParentInput | categoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutParentInput | categoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput> | productCreateWithoutCategoriesInput[] | productUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoriesInput | productCreateOrConnectWithoutCategoriesInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoriesInput | productUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoriesInput | productUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoriesInput | productUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput> | categoryCreateWithoutParentInput[] | categoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutParentInput | categoryCreateOrConnectWithoutParentInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutParentInput | categoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: categoryCreateManyParentInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutParentInput | categoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutParentInput | categoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type productUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput> | productCreateWithoutCategoriesInput[] | productUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productCreateOrConnectWithoutCategoriesInput | productCreateOrConnectWithoutCategoriesInput[]
    upsert?: productUpsertWithWhereUniqueWithoutCategoriesInput | productUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: productWhereUniqueInput | productWhereUniqueInput[]
    disconnect?: productWhereUniqueInput | productWhereUniqueInput[]
    delete?: productWhereUniqueInput | productWhereUniqueInput[]
    connect?: productWhereUniqueInput | productWhereUniqueInput[]
    update?: productUpdateWithWhereUniqueWithoutCategoriesInput | productUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productUpdateManyWithWhereWithoutCategoriesInput | productUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productScalarWhereInput | productScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCartInput = {
    create?: XOR<userCreateWithoutCartInput, userUncheckedCreateWithoutCartInput>
    connectOrCreate?: userCreateOrConnectWithoutCartInput
    connect?: userWhereUniqueInput
  }

  export type cartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type cartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<userCreateWithoutCartInput, userUncheckedCreateWithoutCartInput>
    connectOrCreate?: userCreateOrConnectWithoutCartInput
    upsert?: userUpsertWithoutCartInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCartInput, userUpdateWithoutCartInput>, userUncheckedUpdateWithoutCartInput>
  }

  export type cartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutCartInput | cartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutCartInput | cartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutCartInput | cartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type cartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutCartInput | cartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutCartInput | cartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutCartInput | cartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type cartCreateNestedOneWithoutItemsInput = {
    create?: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutItemsInput
    connect?: cartWhereUniqueInput
  }

  export type productCreateNestedOneWithoutCartItemInput = {
    create?: XOR<productCreateWithoutCartItemInput, productUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: productCreateOrConnectWithoutCartItemInput
    connect?: productWhereUniqueInput
  }

  export type variantCreateNestedOneWithoutCartItemInput = {
    create?: XOR<variantCreateWithoutCartItemInput, variantUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: variantCreateOrConnectWithoutCartItemInput
    connect?: variantWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutItemsInput
    upsert?: cartUpsertWithoutItemsInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutItemsInput, cartUpdateWithoutItemsInput>, cartUncheckedUpdateWithoutItemsInput>
  }

  export type productUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<productCreateWithoutCartItemInput, productUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: productCreateOrConnectWithoutCartItemInput
    upsert?: productUpsertWithoutCartItemInput
    disconnect?: productWhereInput | boolean
    delete?: productWhereInput | boolean
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutCartItemInput, productUpdateWithoutCartItemInput>, productUncheckedUpdateWithoutCartItemInput>
  }

  export type variantUpdateOneWithoutCartItemNestedInput = {
    create?: XOR<variantCreateWithoutCartItemInput, variantUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: variantCreateOrConnectWithoutCartItemInput
    upsert?: variantUpsertWithoutCartItemInput
    disconnect?: variantWhereInput | boolean
    delete?: variantWhereInput | boolean
    connect?: variantWhereUniqueInput
    update?: XOR<XOR<variantUpdateToOneWithWhereWithoutCartItemInput, variantUpdateWithoutCartItemInput>, variantUncheckedUpdateWithoutCartItemInput>
  }

  export type userCreateNestedOneWithoutAddressInput = {
    create?: XOR<userCreateWithoutAddressInput, userUncheckedCreateWithoutAddressInput>
    connectOrCreate?: userCreateOrConnectWithoutAddressInput
    connect?: userWhereUniqueInput
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type userUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<userCreateWithoutAddressInput, userUncheckedCreateWithoutAddressInput>
    connectOrCreate?: userCreateOrConnectWithoutAddressInput
    upsert?: userUpsertWithoutAddressInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAddressInput, userUpdateWithoutAddressInput>, userUncheckedUpdateWithoutAddressInput>
  }

  export type userCreateNestedOneWithoutOrdersInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    connect?: userWhereUniqueInput
  }

  export type orderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type orderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type userUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: userCreateOrConnectWithoutOrdersInput
    upsert?: userUpsertWithoutOrdersInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutOrdersInput, userUpdateWithoutOrdersInput>, userUncheckedUpdateWithoutOrdersInput>
  }

  export type orderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput> | orderItemCreateWithoutOrderInput[] | orderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: orderItemCreateOrConnectWithoutOrderInput | orderItemCreateOrConnectWithoutOrderInput[]
    upsert?: orderItemUpsertWithWhereUniqueWithoutOrderInput | orderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: orderItemCreateManyOrderInputEnvelope
    set?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    disconnect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    delete?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    connect?: orderItemWhereUniqueInput | orderItemWhereUniqueInput[]
    update?: orderItemUpdateWithWhereUniqueWithoutOrderInput | orderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: orderItemUpdateManyWithWhereWithoutOrderInput | orderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type variantCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<variantCreateWithoutOrderItemsInput, variantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: variantCreateOrConnectWithoutOrderItemsInput
    connect?: variantWhereUniqueInput
  }

  export type orderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<orderCreateWithoutOrderItemsInput, orderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderItemsInput
    connect?: orderWhereUniqueInput
  }

  export type productCreateNestedOneWithoutOrderInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    connect?: productWhereUniqueInput
  }

  export type variantUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<variantCreateWithoutOrderItemsInput, variantUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: variantCreateOrConnectWithoutOrderItemsInput
    upsert?: variantUpsertWithoutOrderItemsInput
    disconnect?: variantWhereInput | boolean
    delete?: variantWhereInput | boolean
    connect?: variantWhereUniqueInput
    update?: XOR<XOR<variantUpdateToOneWithWhereWithoutOrderItemsInput, variantUpdateWithoutOrderItemsInput>, variantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type orderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<orderCreateWithoutOrderItemsInput, orderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: orderCreateOrConnectWithoutOrderItemsInput
    upsert?: orderUpsertWithoutOrderItemsInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutOrderItemsInput, orderUpdateWithoutOrderItemsInput>, orderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type productUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    connectOrCreate?: productCreateOrConnectWithoutOrderInput
    upsert?: productUpsertWithoutOrderInput
    connect?: productWhereUniqueInput
    update?: XOR<XOR<productUpdateToOneWithWhereWithoutOrderInput, productUpdateWithoutOrderInput>, productUncheckedUpdateWithoutOrderInput>
  }

  export type orderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: orderCreateOrConnectWithoutPaymentInput
    connect?: orderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type orderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: orderCreateOrConnectWithoutPaymentInput
    upsert?: orderUpsertWithoutPaymentInput
    connect?: orderWhereUniqueInput
    update?: XOR<XOR<orderUpdateToOneWithWhereWithoutPaymentInput, orderUpdateWithoutPaymentInput>, orderUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type productCreateWithoutUserInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryCreateNestedManyWithoutProductsInput
    variants?: variantCreateNestedManyWithoutProductInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    order?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryUncheckedCreateNestedManyWithoutProductsInput
    variants?: variantUncheckedCreateNestedManyWithoutProductInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    order?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutUserInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput>
  }

  export type productCreateManyUserInputEnvelope = {
    data: productCreateManyUserInput | productCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: cartItemCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutUserInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartCreateManyUserInputEnvelope = {
    data: cartCreateManyUserInput | cartCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type addressCreateWithoutUserInput = {
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type addressUncheckedCreateWithoutUserInput = {
    id?: number
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type addressCreateOrConnectWithoutUserInput = {
    where: addressWhereUniqueInput
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressCreateManyUserInputEnvelope = {
    data: addressCreateManyUserInput | addressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type orderCreateWithoutUserInput = {
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    orderItems?: orderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutUserInput = {
    id?: number
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    orderItems?: orderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutUserInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderCreateManyUserInputEnvelope = {
    data: orderCreateManyUserInput | orderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type productUpsertWithWhereUniqueWithoutUserInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutUserInput, productUncheckedUpdateWithoutUserInput>
    create: XOR<productCreateWithoutUserInput, productUncheckedCreateWithoutUserInput>
  }

  export type productUpdateWithWhereUniqueWithoutUserInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutUserInput, productUncheckedUpdateWithoutUserInput>
  }

  export type productUpdateManyWithWhereWithoutUserInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutUserInput>
  }

  export type productScalarWhereInput = {
    AND?: productScalarWhereInput | productScalarWhereInput[]
    OR?: productScalarWhereInput[]
    NOT?: productScalarWhereInput | productScalarWhereInput[]
    id?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    price?: FloatFilter<"product"> | number
    image?: StringNullableFilter<"product"> | string | null
    userId?: IntFilter<"product"> | number
    stock?: IntFilter<"product"> | number
    is_new_arrival?: BoolFilter<"product"> | boolean
    is_active?: BoolFilter<"product"> | boolean
    tag?: StringNullableListFilter<"product">
    slug?: StringFilter<"product"> | string
    description?: StringFilter<"product"> | string
  }

  export type cartUpsertWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    update: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
    create: XOR<cartCreateWithoutUserInput, cartUncheckedCreateWithoutUserInput>
  }

  export type cartUpdateWithWhereUniqueWithoutUserInput = {
    where: cartWhereUniqueInput
    data: XOR<cartUpdateWithoutUserInput, cartUncheckedUpdateWithoutUserInput>
  }

  export type cartUpdateManyWithWhereWithoutUserInput = {
    where: cartScalarWhereInput
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyWithoutUserInput>
  }

  export type cartScalarWhereInput = {
    AND?: cartScalarWhereInput | cartScalarWhereInput[]
    OR?: cartScalarWhereInput[]
    NOT?: cartScalarWhereInput | cartScalarWhereInput[]
    id?: IntFilter<"cart"> | number
    userId?: IntFilter<"cart"> | number
    createdAt?: DateTimeFilter<"cart"> | Date | string
    updatedAt?: DateTimeFilter<"cart"> | Date | string
  }

  export type addressUpsertWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    update: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
    create: XOR<addressCreateWithoutUserInput, addressUncheckedCreateWithoutUserInput>
  }

  export type addressUpdateWithWhereUniqueWithoutUserInput = {
    where: addressWhereUniqueInput
    data: XOR<addressUpdateWithoutUserInput, addressUncheckedUpdateWithoutUserInput>
  }

  export type addressUpdateManyWithWhereWithoutUserInput = {
    where: addressScalarWhereInput
    data: XOR<addressUpdateManyMutationInput, addressUncheckedUpdateManyWithoutUserInput>
  }

  export type addressScalarWhereInput = {
    AND?: addressScalarWhereInput | addressScalarWhereInput[]
    OR?: addressScalarWhereInput[]
    NOT?: addressScalarWhereInput | addressScalarWhereInput[]
    id?: IntFilter<"address"> | number
    userId?: IntFilter<"address"> | number
    street?: StringFilter<"address"> | string
    city?: StringFilter<"address"> | string
    state?: StringFilter<"address"> | string
    postalCode?: StringFilter<"address"> | string
    country?: StringFilter<"address"> | string
    addressType?: EnumAddressTypeFilter<"address"> | $Enums.AddressType
    createdAt?: DateTimeFilter<"address"> | Date | string
    updatedAt?: DateTimeFilter<"address"> | Date | string
  }

  export type orderUpsertWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    update: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
    create: XOR<orderCreateWithoutUserInput, orderUncheckedCreateWithoutUserInput>
  }

  export type orderUpdateWithWhereUniqueWithoutUserInput = {
    where: orderWhereUniqueInput
    data: XOR<orderUpdateWithoutUserInput, orderUncheckedUpdateWithoutUserInput>
  }

  export type orderUpdateManyWithWhereWithoutUserInput = {
    where: orderScalarWhereInput
    data: XOR<orderUpdateManyMutationInput, orderUncheckedUpdateManyWithoutUserInput>
  }

  export type orderScalarWhereInput = {
    AND?: orderScalarWhereInput | orderScalarWhereInput[]
    OR?: orderScalarWhereInput[]
    NOT?: orderScalarWhereInput | orderScalarWhereInput[]
    id?: IntFilter<"order"> | number
    userId?: IntNullableFilter<"order"> | number | null
    guestemail?: StringNullableFilter<"order"> | string | null
    subTotal?: FloatFilter<"order"> | number
    tax?: FloatFilter<"order"> | number
    discount?: FloatFilter<"order"> | number
    deliveryCharge?: FloatFilter<"order"> | number
    finalTotal?: FloatFilter<"order"> | number
    billingAddress?: StringFilter<"order"> | string
    deliveryAddress?: StringFilter<"order"> | string
    status?: EnumOrderStatusFilter<"order"> | $Enums.OrderStatus
    is_payment_done?: BoolFilter<"order"> | boolean
    createdAt?: DateTimeFilter<"order"> | Date | string
  }

  export type categoryCreateWithoutProductsInput = {
    name: string
    parent?: categoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: categoryCreateNestedManyWithoutParentInput
  }

  export type categoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    parentId?: number | null
    subcategories?: categoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type categoryCreateOrConnectWithoutProductsInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
  }

  export type userCreateWithoutProductsInput = {
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: cartCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutProductsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutProductsInput, userUncheckedCreateWithoutProductsInput>
  }

  export type variantCreateWithoutProductInput = {
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    images?: variantimageCreateNestedManyWithoutVariantInput
    cartItem?: cartItemCreateNestedManyWithoutVariantInput
    orderItems?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type variantUncheckedCreateWithoutProductInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    images?: variantimageUncheckedCreateNestedManyWithoutVariantInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type variantCreateOrConnectWithoutProductInput = {
    where: variantWhereUniqueInput
    create: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput>
  }

  export type variantCreateManyProductInputEnvelope = {
    data: variantCreateManyProductInput | variantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type cartItemCreateWithoutProductInput = {
    quantity?: number
    addedAt?: Date | string
    cart: cartCreateNestedOneWithoutItemsInput
    variant?: variantCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateWithoutProductInput = {
    id?: number
    cartId: number
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemCreateOrConnectWithoutProductInput = {
    where: cartItemWhereUniqueInput
    create: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput>
  }

  export type cartItemCreateManyProductInputEnvelope = {
    data: cartItemCreateManyProductInput | cartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type orderItemCreateWithoutProductInput = {
    unitPrice: number
    quantity: number
    variant?: variantCreateNestedOneWithoutOrderItemsInput
    order: orderCreateNestedOneWithoutOrderItemsInput
  }

  export type orderItemUncheckedCreateWithoutProductInput = {
    id?: number
    orderId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type orderItemCreateOrConnectWithoutProductInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemCreateManyProductInputEnvelope = {
    data: orderItemCreateManyProductInput | orderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithWhereUniqueWithoutProductsInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
    create: XOR<categoryCreateWithoutProductsInput, categoryUncheckedCreateWithoutProductsInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutProductsInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutProductsInput, categoryUncheckedUpdateWithoutProductsInput>
  }

  export type categoryUpdateManyWithWhereWithoutProductsInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutProductsInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    id?: IntFilter<"category"> | number
    name?: StringFilter<"category"> | string
    parentId?: IntNullableFilter<"category"> | number | null
  }

  export type userUpsertWithoutProductsInput = {
    update: XOR<userUpdateWithoutProductsInput, userUncheckedUpdateWithoutProductsInput>
    create: XOR<userCreateWithoutProductsInput, userUncheckedCreateWithoutProductsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutProductsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutProductsInput, userUncheckedUpdateWithoutProductsInput>
  }

  export type userUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type variantUpsertWithWhereUniqueWithoutProductInput = {
    where: variantWhereUniqueInput
    update: XOR<variantUpdateWithoutProductInput, variantUncheckedUpdateWithoutProductInput>
    create: XOR<variantCreateWithoutProductInput, variantUncheckedCreateWithoutProductInput>
  }

  export type variantUpdateWithWhereUniqueWithoutProductInput = {
    where: variantWhereUniqueInput
    data: XOR<variantUpdateWithoutProductInput, variantUncheckedUpdateWithoutProductInput>
  }

  export type variantUpdateManyWithWhereWithoutProductInput = {
    where: variantScalarWhereInput
    data: XOR<variantUpdateManyMutationInput, variantUncheckedUpdateManyWithoutProductInput>
  }

  export type variantScalarWhereInput = {
    AND?: variantScalarWhereInput | variantScalarWhereInput[]
    OR?: variantScalarWhereInput[]
    NOT?: variantScalarWhereInput | variantScalarWhereInput[]
    id?: IntFilter<"variant"> | number
    description?: StringFilter<"variant"> | string
    specification?: JsonFilter<"variant">
    Price?: FloatFilter<"variant"> | number
    stock?: IntFilter<"variant"> | number
    productId?: IntFilter<"variant"> | number
  }

  export type cartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: cartItemWhereUniqueInput
    update: XOR<cartItemUpdateWithoutProductInput, cartItemUncheckedUpdateWithoutProductInput>
    create: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput>
  }

  export type cartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: cartItemWhereUniqueInput
    data: XOR<cartItemUpdateWithoutProductInput, cartItemUncheckedUpdateWithoutProductInput>
  }

  export type cartItemUpdateManyWithWhereWithoutProductInput = {
    where: cartItemScalarWhereInput
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type cartItemScalarWhereInput = {
    AND?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
    OR?: cartItemScalarWhereInput[]
    NOT?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
    id?: IntFilter<"cartItem"> | number
    cartId?: IntFilter<"cartItem"> | number
    productId?: IntNullableFilter<"cartItem"> | number | null
    variantId?: IntNullableFilter<"cartItem"> | number | null
    quantity?: IntFilter<"cartItem"> | number
    addedAt?: DateTimeFilter<"cartItem"> | Date | string
  }

  export type orderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
    create: XOR<orderItemCreateWithoutProductInput, orderItemUncheckedCreateWithoutProductInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutProductInput, orderItemUncheckedUpdateWithoutProductInput>
  }

  export type orderItemUpdateManyWithWhereWithoutProductInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type orderItemScalarWhereInput = {
    AND?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    OR?: orderItemScalarWhereInput[]
    NOT?: orderItemScalarWhereInput | orderItemScalarWhereInput[]
    id?: IntFilter<"orderItem"> | number
    orderId?: IntFilter<"orderItem"> | number
    productId?: IntFilter<"orderItem"> | number
    unitPrice?: FloatFilter<"orderItem"> | number
    quantity?: IntFilter<"orderItem"> | number
    variantId?: IntNullableFilter<"orderItem"> | number | null
  }

  export type variantimageCreateWithoutVariantInput = {
    url: string
  }

  export type variantimageUncheckedCreateWithoutVariantInput = {
    id?: number
    url: string
  }

  export type variantimageCreateOrConnectWithoutVariantInput = {
    where: variantimageWhereUniqueInput
    create: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput>
  }

  export type variantimageCreateManyVariantInputEnvelope = {
    data: variantimageCreateManyVariantInput | variantimageCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutVariantsInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryCreateNestedManyWithoutProductsInput
    user: userCreateNestedOneWithoutProductsInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    order?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutVariantsInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryUncheckedCreateNestedManyWithoutProductsInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    order?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutVariantsInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
  }

  export type cartItemCreateWithoutVariantInput = {
    quantity?: number
    addedAt?: Date | string
    cart: cartCreateNestedOneWithoutItemsInput
    product?: productCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateWithoutVariantInput = {
    id?: number
    cartId: number
    productId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemCreateOrConnectWithoutVariantInput = {
    where: cartItemWhereUniqueInput
    create: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput>
  }

  export type cartItemCreateManyVariantInputEnvelope = {
    data: cartItemCreateManyVariantInput | cartItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type orderItemCreateWithoutVariantInput = {
    unitPrice: number
    quantity: number
    order: orderCreateNestedOneWithoutOrderItemsInput
    product: productCreateNestedOneWithoutOrderInput
  }

  export type orderItemUncheckedCreateWithoutVariantInput = {
    id?: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
  }

  export type orderItemCreateOrConnectWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput>
  }

  export type orderItemCreateManyVariantInputEnvelope = {
    data: orderItemCreateManyVariantInput | orderItemCreateManyVariantInput[]
    skipDuplicates?: boolean
  }

  export type variantimageUpsertWithWhereUniqueWithoutVariantInput = {
    where: variantimageWhereUniqueInput
    update: XOR<variantimageUpdateWithoutVariantInput, variantimageUncheckedUpdateWithoutVariantInput>
    create: XOR<variantimageCreateWithoutVariantInput, variantimageUncheckedCreateWithoutVariantInput>
  }

  export type variantimageUpdateWithWhereUniqueWithoutVariantInput = {
    where: variantimageWhereUniqueInput
    data: XOR<variantimageUpdateWithoutVariantInput, variantimageUncheckedUpdateWithoutVariantInput>
  }

  export type variantimageUpdateManyWithWhereWithoutVariantInput = {
    where: variantimageScalarWhereInput
    data: XOR<variantimageUpdateManyMutationInput, variantimageUncheckedUpdateManyWithoutVariantInput>
  }

  export type variantimageScalarWhereInput = {
    AND?: variantimageScalarWhereInput | variantimageScalarWhereInput[]
    OR?: variantimageScalarWhereInput[]
    NOT?: variantimageScalarWhereInput | variantimageScalarWhereInput[]
    id?: IntFilter<"variantimage"> | number
    url?: StringFilter<"variantimage"> | string
    variantId?: IntFilter<"variantimage"> | number
  }

  export type productUpsertWithoutVariantsInput = {
    update: XOR<productUpdateWithoutVariantsInput, productUncheckedUpdateWithoutVariantsInput>
    create: XOR<productCreateWithoutVariantsInput, productUncheckedCreateWithoutVariantsInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutVariantsInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutVariantsInput, productUncheckedUpdateWithoutVariantsInput>
  }

  export type productUpdateWithoutVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUpdateManyWithoutProductsNestedInput
    user?: userUpdateOneRequiredWithoutProductsNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    order?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUncheckedUpdateManyWithoutProductsNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    order?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type cartItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: cartItemWhereUniqueInput
    update: XOR<cartItemUpdateWithoutVariantInput, cartItemUncheckedUpdateWithoutVariantInput>
    create: XOR<cartItemCreateWithoutVariantInput, cartItemUncheckedCreateWithoutVariantInput>
  }

  export type cartItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: cartItemWhereUniqueInput
    data: XOR<cartItemUpdateWithoutVariantInput, cartItemUncheckedUpdateWithoutVariantInput>
  }

  export type cartItemUpdateManyWithWhereWithoutVariantInput = {
    where: cartItemScalarWhereInput
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type orderItemUpsertWithWhereUniqueWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutVariantInput, orderItemUncheckedUpdateWithoutVariantInput>
    create: XOR<orderItemCreateWithoutVariantInput, orderItemUncheckedCreateWithoutVariantInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutVariantInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutVariantInput, orderItemUncheckedUpdateWithoutVariantInput>
  }

  export type orderItemUpdateManyWithWhereWithoutVariantInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutVariantInput>
  }

  export type variantCreateWithoutImagesInput = {
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    product: productCreateNestedOneWithoutVariantsInput
    cartItem?: cartItemCreateNestedManyWithoutVariantInput
    orderItems?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type variantUncheckedCreateWithoutImagesInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    productId: number
    cartItem?: cartItemUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type variantCreateOrConnectWithoutImagesInput = {
    where: variantWhereUniqueInput
    create: XOR<variantCreateWithoutImagesInput, variantUncheckedCreateWithoutImagesInput>
  }

  export type variantUpsertWithoutImagesInput = {
    update: XOR<variantUpdateWithoutImagesInput, variantUncheckedUpdateWithoutImagesInput>
    create: XOR<variantCreateWithoutImagesInput, variantUncheckedCreateWithoutImagesInput>
    where?: variantWhereInput
  }

  export type variantUpdateToOneWithWhereWithoutImagesInput = {
    where?: variantWhereInput
    data: XOR<variantUpdateWithoutImagesInput, variantUncheckedUpdateWithoutImagesInput>
  }

  export type variantUpdateWithoutImagesInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
    cartItem?: cartItemUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    cartItem?: cartItemUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type categoryCreateWithoutSubcategoriesInput = {
    name: string
    parent?: categoryCreateNestedOneWithoutSubcategoriesInput
    products?: productCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: number
    name: string
    parentId?: number | null
    products?: productUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoryCreateOrConnectWithoutSubcategoriesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutSubcategoriesInput, categoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type categoryCreateWithoutParentInput = {
    name: string
    subcategories?: categoryCreateNestedManyWithoutParentInput
    products?: productCreateNestedManyWithoutCategoriesInput
  }

  export type categoryUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    subcategories?: categoryUncheckedCreateNestedManyWithoutParentInput
    products?: productUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoryCreateOrConnectWithoutParentInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput>
  }

  export type categoryCreateManyParentInputEnvelope = {
    data: categoryCreateManyParentInput | categoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type productCreateWithoutCategoriesInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    user: userCreateNestedOneWithoutProductsInput
    variants?: variantCreateNestedManyWithoutProductInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    order?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    variants?: variantUncheckedCreateNestedManyWithoutProductInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    order?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCategoriesInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput>
  }

  export type categoryUpsertWithoutSubcategoriesInput = {
    update: XOR<categoryUpdateWithoutSubcategoriesInput, categoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<categoryCreateWithoutSubcategoriesInput, categoryUncheckedCreateWithoutSubcategoriesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutSubcategoriesInput, categoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type categoryUpdateWithoutSubcategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: categoryUpdateOneWithoutSubcategoriesNestedInput
    products?: productUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUpsertWithWhereUniqueWithoutParentInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutParentInput, categoryUncheckedUpdateWithoutParentInput>
    create: XOR<categoryCreateWithoutParentInput, categoryUncheckedCreateWithoutParentInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutParentInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutParentInput, categoryUncheckedUpdateWithoutParentInput>
  }

  export type categoryUpdateManyWithWhereWithoutParentInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutParentInput>
  }

  export type productUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productWhereUniqueInput
    update: XOR<productUpdateWithoutCategoriesInput, productUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productCreateWithoutCategoriesInput, productUncheckedCreateWithoutCategoriesInput>
  }

  export type productUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productWhereUniqueInput
    data: XOR<productUpdateWithoutCategoriesInput, productUncheckedUpdateWithoutCategoriesInput>
  }

  export type productUpdateManyWithWhereWithoutCategoriesInput = {
    where: productScalarWhereInput
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type userCreateWithoutCartInput = {
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCartInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCartInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCartInput, userUncheckedCreateWithoutCartInput>
  }

  export type cartItemCreateWithoutCartInput = {
    quantity?: number
    addedAt?: Date | string
    product?: productCreateNestedOneWithoutCartItemInput
    variant?: variantCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateWithoutCartInput = {
    id?: number
    productId?: number | null
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemCreateOrConnectWithoutCartInput = {
    where: cartItemWhereUniqueInput
    create: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput>
  }

  export type cartItemCreateManyCartInputEnvelope = {
    data: cartItemCreateManyCartInput | cartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCartInput = {
    update: XOR<userUpdateWithoutCartInput, userUncheckedUpdateWithoutCartInput>
    create: XOR<userCreateWithoutCartInput, userUncheckedCreateWithoutCartInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCartInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCartInput, userUncheckedUpdateWithoutCartInput>
  }

  export type userUpdateWithoutCartInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type cartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: cartItemWhereUniqueInput
    update: XOR<cartItemUpdateWithoutCartInput, cartItemUncheckedUpdateWithoutCartInput>
    create: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput>
  }

  export type cartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: cartItemWhereUniqueInput
    data: XOR<cartItemUpdateWithoutCartInput, cartItemUncheckedUpdateWithoutCartInput>
  }

  export type cartItemUpdateManyWithWhereWithoutCartInput = {
    where: cartItemScalarWhereInput
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type cartCreateWithoutItemsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: userCreateNestedOneWithoutCartInput
  }

  export type cartUncheckedCreateWithoutItemsInput = {
    id?: number
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type cartCreateOrConnectWithoutItemsInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
  }

  export type productCreateWithoutCartItemInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryCreateNestedManyWithoutProductsInput
    user: userCreateNestedOneWithoutProductsInput
    variants?: variantCreateNestedManyWithoutProductInput
    order?: orderItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutCartItemInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryUncheckedCreateNestedManyWithoutProductsInput
    variants?: variantUncheckedCreateNestedManyWithoutProductInput
    order?: orderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutCartItemInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutCartItemInput, productUncheckedCreateWithoutCartItemInput>
  }

  export type variantCreateWithoutCartItemInput = {
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    images?: variantimageCreateNestedManyWithoutVariantInput
    product: productCreateNestedOneWithoutVariantsInput
    orderItems?: orderItemCreateNestedManyWithoutVariantInput
  }

  export type variantUncheckedCreateWithoutCartItemInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    productId: number
    images?: variantimageUncheckedCreateNestedManyWithoutVariantInput
    orderItems?: orderItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type variantCreateOrConnectWithoutCartItemInput = {
    where: variantWhereUniqueInput
    create: XOR<variantCreateWithoutCartItemInput, variantUncheckedCreateWithoutCartItemInput>
  }

  export type cartUpsertWithoutItemsInput = {
    update: XOR<cartUpdateWithoutItemsInput, cartUncheckedUpdateWithoutItemsInput>
    create: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutItemsInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutItemsInput, cartUncheckedUpdateWithoutItemsInput>
  }

  export type cartUpdateWithoutItemsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productUpsertWithoutCartItemInput = {
    update: XOR<productUpdateWithoutCartItemInput, productUncheckedUpdateWithoutCartItemInput>
    create: XOR<productCreateWithoutCartItemInput, productUncheckedCreateWithoutCartItemInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutCartItemInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutCartItemInput, productUncheckedUpdateWithoutCartItemInput>
  }

  export type productUpdateWithoutCartItemInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUpdateManyWithoutProductsNestedInput
    user?: userUpdateOneRequiredWithoutProductsNestedInput
    variants?: variantUpdateManyWithoutProductNestedInput
    order?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUncheckedUpdateManyWithoutProductsNestedInput
    variants?: variantUncheckedUpdateManyWithoutProductNestedInput
    order?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type variantUpsertWithoutCartItemInput = {
    update: XOR<variantUpdateWithoutCartItemInput, variantUncheckedUpdateWithoutCartItemInput>
    create: XOR<variantCreateWithoutCartItemInput, variantUncheckedCreateWithoutCartItemInput>
    where?: variantWhereInput
  }

  export type variantUpdateToOneWithWhereWithoutCartItemInput = {
    where?: variantWhereInput
    data: XOR<variantUpdateWithoutCartItemInput, variantUncheckedUpdateWithoutCartItemInput>
  }

  export type variantUpdateWithoutCartItemInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    images?: variantimageUpdateManyWithoutVariantNestedInput
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
    orderItems?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    images?: variantimageUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type userCreateWithoutAddressInput = {
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    orders?: orderCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    orders?: orderUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutAddressInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAddressInput, userUncheckedCreateWithoutAddressInput>
  }

  export type userUpsertWithoutAddressInput = {
    update: XOR<userUpdateWithoutAddressInput, userUncheckedUpdateWithoutAddressInput>
    create: XOR<userCreateWithoutAddressInput, userUncheckedCreateWithoutAddressInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAddressInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAddressInput, userUncheckedUpdateWithoutAddressInput>
  }

  export type userUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    orders?: orderUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    orders?: orderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutOrdersInput = {
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productCreateNestedManyWithoutUserInput
    cart?: cartCreateNestedManyWithoutUserInput
    address?: addressCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    age?: number | null
    email: string
    password: string
    profile: string
    role?: $Enums.Role
    otp?: string | null
    otpExpiry?: Date | string | null
    resetToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: productUncheckedCreateNestedManyWithoutUserInput
    cart?: cartUncheckedCreateNestedManyWithoutUserInput
    address?: addressUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutOrdersInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
  }

  export type orderItemCreateWithoutOrderInput = {
    unitPrice: number
    quantity: number
    variant?: variantCreateNestedOneWithoutOrderItemsInput
    product: productCreateNestedOneWithoutOrderInput
  }

  export type orderItemUncheckedCreateWithoutOrderInput = {
    id?: number
    productId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type orderItemCreateOrConnectWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemCreateManyOrderInputEnvelope = {
    data: orderItemCreateManyOrderInput | orderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    paymentType: string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentDatetime?: Date | string | null
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    paymentType: string
    transactionId?: string | null
    status?: $Enums.PaymentStatus
    paymentDatetime?: Date | string | null
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type userUpsertWithoutOrdersInput = {
    update: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
    create: XOR<userCreateWithoutOrdersInput, userUncheckedCreateWithoutOrdersInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutOrdersInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutOrdersInput, userUncheckedUpdateWithoutOrdersInput>
  }

  export type userUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUpdateManyWithoutUserNestedInput
    cart?: cartUpdateManyWithoutUserNestedInput
    address?: addressUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: productUncheckedUpdateManyWithoutUserNestedInput
    cart?: cartUncheckedUpdateManyWithoutUserNestedInput
    address?: addressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type orderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    update: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<orderItemCreateWithoutOrderInput, orderItemUncheckedCreateWithoutOrderInput>
  }

  export type orderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: orderItemWhereUniqueInput
    data: XOR<orderItemUpdateWithoutOrderInput, orderItemUncheckedUpdateWithoutOrderInput>
  }

  export type orderItemUpdateManyWithWhereWithoutOrderInput = {
    where: orderItemScalarWhereInput
    data: XOR<orderItemUpdateManyMutationInput, orderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    paymentType?: StringFieldUpdateOperationsInput | string
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type variantCreateWithoutOrderItemsInput = {
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    images?: variantimageCreateNestedManyWithoutVariantInput
    product: productCreateNestedOneWithoutVariantsInput
    cartItem?: cartItemCreateNestedManyWithoutVariantInput
  }

  export type variantUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
    productId: number
    images?: variantimageUncheckedCreateNestedManyWithoutVariantInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutVariantInput
  }

  export type variantCreateOrConnectWithoutOrderItemsInput = {
    where: variantWhereUniqueInput
    create: XOR<variantCreateWithoutOrderItemsInput, variantUncheckedCreateWithoutOrderItemsInput>
  }

  export type orderCreateWithoutOrderItemsInput = {
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutOrderItemsInput = {
    id?: number
    userId?: number | null
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutOrderItemsInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutOrderItemsInput, orderUncheckedCreateWithoutOrderItemsInput>
  }

  export type productCreateWithoutOrderInput = {
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryCreateNestedManyWithoutProductsInput
    user: userCreateNestedOneWithoutProductsInput
    variants?: variantCreateNestedManyWithoutProductInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
  }

  export type productUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    userId: number
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
    categories?: categoryUncheckedCreateNestedManyWithoutProductsInput
    variants?: variantUncheckedCreateNestedManyWithoutProductInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type productCreateOrConnectWithoutOrderInput = {
    where: productWhereUniqueInput
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
  }

  export type variantUpsertWithoutOrderItemsInput = {
    update: XOR<variantUpdateWithoutOrderItemsInput, variantUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<variantCreateWithoutOrderItemsInput, variantUncheckedCreateWithoutOrderItemsInput>
    where?: variantWhereInput
  }

  export type variantUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: variantWhereInput
    data: XOR<variantUpdateWithoutOrderItemsInput, variantUncheckedUpdateWithoutOrderItemsInput>
  }

  export type variantUpdateWithoutOrderItemsInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    images?: variantimageUpdateManyWithoutVariantNestedInput
    product?: productUpdateOneRequiredWithoutVariantsNestedInput
    cartItem?: cartItemUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    images?: variantimageUncheckedUpdateManyWithoutVariantNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type orderUpsertWithoutOrderItemsInput = {
    update: XOR<orderUpdateWithoutOrderItemsInput, orderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<orderCreateWithoutOrderItemsInput, orderUncheckedCreateWithoutOrderItemsInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutOrderItemsInput, orderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type orderUpdateWithoutOrderItemsInput = {
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutOrderItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type productUpsertWithoutOrderInput = {
    update: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
    create: XOR<productCreateWithoutOrderInput, productUncheckedCreateWithoutOrderInput>
    where?: productWhereInput
  }

  export type productUpdateToOneWithWhereWithoutOrderInput = {
    where?: productWhereInput
    data: XOR<productUpdateWithoutOrderInput, productUncheckedUpdateWithoutOrderInput>
  }

  export type productUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUpdateManyWithoutProductsNestedInput
    user?: userUpdateOneRequiredWithoutProductsNestedInput
    variants?: variantUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUncheckedUpdateManyWithoutProductsNestedInput
    variants?: variantUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type orderCreateWithoutPaymentInput = {
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    user?: userCreateNestedOneWithoutOrdersInput
    orderItems?: orderItemCreateNestedManyWithoutOrderInput
  }

  export type orderUncheckedCreateWithoutPaymentInput = {
    id?: number
    userId?: number | null
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
    orderItems?: orderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type orderCreateOrConnectWithoutPaymentInput = {
    where: orderWhereUniqueInput
    create: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
  }

  export type orderUpsertWithoutPaymentInput = {
    update: XOR<orderUpdateWithoutPaymentInput, orderUncheckedUpdateWithoutPaymentInput>
    create: XOR<orderCreateWithoutPaymentInput, orderUncheckedCreateWithoutPaymentInput>
    where?: orderWhereInput
  }

  export type orderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: orderWhereInput
    data: XOR<orderUpdateWithoutPaymentInput, orderUncheckedUpdateWithoutPaymentInput>
  }

  export type orderUpdateWithoutPaymentInput = {
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneWithoutOrdersNestedInput
    orderItems?: orderItemUpdateManyWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type productCreateManyUserInput = {
    id?: number
    name: string
    price: number
    image?: string | null
    stock?: number
    is_new_arrival: boolean
    is_active: boolean
    tag?: productCreatetagInput | string[]
    slug: string
    description: string
  }

  export type cartCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type addressCreateManyUserInput = {
    id?: number
    street: string
    city: string
    state: string
    postalCode: string
    country: string
    addressType: $Enums.AddressType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type orderCreateManyUserInput = {
    id?: number
    guestemail?: string | null
    subTotal: number
    tax: number
    discount: number
    deliveryCharge: number
    finalTotal: number
    billingAddress: string
    deliveryAddress: string
    status?: $Enums.OrderStatus
    is_payment_done: boolean
    createdAt?: Date | string
  }

  export type productUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUpdateManyWithoutProductsNestedInput
    variants?: variantUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    order?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categories?: categoryUncheckedUpdateManyWithoutProductsNestedInput
    variants?: variantUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    order?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type cartUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: cartItemUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUpdateWithoutUserInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type addressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    addressType?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderUpdateWithoutUserInput = {
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: orderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type orderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    guestemail?: NullableStringFieldUpdateOperationsInput | string | null
    subTotal?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    deliveryCharge?: FloatFieldUpdateOperationsInput | number
    finalTotal?: FloatFieldUpdateOperationsInput | number
    billingAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    is_payment_done?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type variantCreateManyProductInput = {
    id?: number
    description: string
    specification: JsonNullValueInput | InputJsonValue
    Price: number
    stock: number
  }

  export type cartItemCreateManyProductInput = {
    id?: number
    cartId: number
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type orderItemCreateManyProductInput = {
    id?: number
    orderId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type categoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    parent?: categoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: categoryUpdateManyWithoutParentNestedInput
  }

  export type categoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    subcategories?: categoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variantUpdateWithoutProductInput = {
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    images?: variantimageUpdateManyWithoutVariantNestedInput
    cartItem?: cartItemUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    images?: variantimageUncheckedUpdateManyWithoutVariantNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutVariantNestedInput
    orderItems?: orderItemUncheckedUpdateManyWithoutVariantNestedInput
  }

  export type variantUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    specification?: JsonNullValueInput | InputJsonValue
    Price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type cartItemUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateOneRequiredWithoutItemsNestedInput
    variant?: variantUpdateOneWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemUpdateWithoutProductInput = {
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variant?: variantUpdateOneWithoutOrderItemsNestedInput
    order?: orderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type orderItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type variantimageCreateManyVariantInput = {
    id?: number
    url: string
  }

  export type cartItemCreateManyVariantInput = {
    id?: number
    cartId: number
    productId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type orderItemCreateManyVariantInput = {
    id?: number
    orderId: number
    productId: number
    unitPrice: number
    quantity: number
  }

  export type variantimageUpdateWithoutVariantInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type variantimageUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type variantimageUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type cartItemUpdateWithoutVariantInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: cartUpdateOneRequiredWithoutItemsNestedInput
    product?: productUpdateOneWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    cartId?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemUpdateWithoutVariantInput = {
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    order?: orderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: productUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderItemUncheckedUpdateWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type orderItemUncheckedUpdateManyWithoutVariantInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type categoryCreateManyParentInput = {
    id?: number
    name: string
  }

  export type categoryUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: categoryUpdateManyWithoutParentNestedInput
    products?: productUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subcategories?: categoryUncheckedUpdateManyWithoutParentNestedInput
    products?: productUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user?: userUpdateOneRequiredWithoutProductsNestedInput
    variants?: variantUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    order?: orderItemUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    variants?: variantUncheckedUpdateManyWithoutProductNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    order?: orderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    is_new_arrival?: BoolFieldUpdateOperationsInput | boolean
    is_active?: BoolFieldUpdateOperationsInput | boolean
    tag?: productUpdatetagInput | string[]
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type cartItemCreateManyCartInput = {
    id?: number
    productId?: number | null
    variantId?: number | null
    quantity?: number
    addedAt?: Date | string
  }

  export type cartItemUpdateWithoutCartInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: productUpdateOneWithoutCartItemNestedInput
    variant?: variantUpdateOneWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type orderItemCreateManyOrderInput = {
    id?: number
    productId: number
    unitPrice: number
    quantity: number
    variantId?: number | null
  }

  export type orderItemUpdateWithoutOrderInput = {
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variant?: variantUpdateOneWithoutOrderItemsNestedInput
    product?: productUpdateOneRequiredWithoutOrderNestedInput
  }

  export type orderItemUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type orderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    variantId?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}