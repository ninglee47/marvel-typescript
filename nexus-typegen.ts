/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Civil_War: { // root type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  Data: { // root type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  House_Of_M: { // root type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Civil_War: { // field return type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  Data: { // field return type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  House_Of_M: { // field return type
    id: number; // Int!
    img: string; // String!
    title: string; // String!
    url: string; // String!
  }
  Query: { // field return type
    feed: NexusGenRootTypes['Data'][]; // [Data!]!
    feed_civil_War: NexusGenRootTypes['Civil_War'][]; // [Civil_War!]!
    feed_house_Of_M: NexusGenRootTypes['House_Of_M'][]; // [House_Of_M!]!
  }
}

export interface NexusGenFieldTypeNames {
  Civil_War: { // field return type name
    id: 'Int'
    img: 'String'
    title: 'String'
    url: 'String'
  }
  Data: { // field return type name
    id: 'Int'
    img: 'String'
    title: 'String'
    url: 'String'
  }
  House_Of_M: { // field return type name
    id: 'Int'
    img: 'String'
    title: 'String'
    url: 'String'
  }
  Query: { // field return type name
    feed: 'Data'
    feed_civil_War: 'Civil_War'
    feed_house_Of_M: 'House_Of_M'
  }
}

export interface NexusGenArgTypes {
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}