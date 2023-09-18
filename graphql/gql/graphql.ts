/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: ReturnUserFields;
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  categorySlug: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  new?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  seller?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetAllProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['String']['input']>;
  minPrice?: InputMaybe<Scalars['String']['input']>;
  new?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetCategoryByIdInput = {
  id: Scalars['Int']['input'];
};

export type GetCategoryBySlugInput = {
  slug: Scalars['String']['input'];
};

export type GetNewTokenInput = {
  refreshToken: Scalars['String']['input'];
};

export type GetProductById = {
  id: Scalars['Int']['input'];
};

export type GetProductBySlug = {
  slug: Scalars['String']['input'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: ResponseCategory;
  createProduct: Product;
  deleteCategory: ResponseCategory;
  deleteProduct: Product;
  login: AuthResponse;
  newToken: NewTokensResponse;
  register: AuthResponse;
  toggleFavoritesProfile: Scalars['String']['output'];
  updateCategory: ResponseCategory;
  updateProfile: User;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteProductArgs = {
  deleteProductById: GetProductById;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationNewTokenArgs = {
  getNewTokenInput: GetNewTokenInput;
};


export type MutationRegisterArgs = {
  authInput: AuthInput;
};


export type MutationToggleFavoritesProfileArgs = {
  productId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};

export type Product = {
  __typename?: 'Product';
  categoryId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** allCategories */
  getAllCategories: Array<ResponseCategory>;
  getAllProducts: AllProductsAndLength;
  getCategoryById: ResponseCategory;
  /** nameGetCategoryBySlug */
  getCategoryBySlug: ResponseCategory;
  getProductById: Product;
  getProductBySlug: Product;
  getProfile: User;
};


export type QueryGetAllProductsArgs = {
  getAllProductInput: GetAllProductInput;
};


export type QueryGetCategoryByIdArgs = {
  getCategoryByIdInput: GetCategoryByIdInput;
};


export type QueryGetCategoryBySlugArgs = {
  getCategoryBySlugInput: GetCategoryBySlugInput;
};


export type QueryGetProductByIdArgs = {
  getProductById: GetProductById;
};


export type QueryGetProductBySlugArgs = {
  getProductBySlug: GetProductBySlug;
};

export type ResponseCategory = {
  __typename?: 'ResponseCategory';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateUserProfileInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatarPath: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Product>>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type AllProductsAndLength = {
  __typename?: 'allProductsAndLength';
  length: Scalars['Int']['output'];
  products: Array<Product>;
};

export type NewTokensResponse = {
  __typename?: 'newTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type ReturnUserFields = {
  __typename?: 'returnUserFields';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
};

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'ResponseCategory', id: number, name: string, slug: string }> };


export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;