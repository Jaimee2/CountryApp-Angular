
export interface Country {
  name: Name
  tld: string[]
  cca2: string
  ccn3: string
  cca3: string
  cioc?: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  fifa?: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode?: PostalCode
  gini?: Gini
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  ara?: Ara
  eng?: Eng
  tir?: Tir
  ita?: Ita
  spa?: Spa
  fra?: Fra
  por?: Por
  nld?: Nld
  div?: Div
  nep?: Nep
  swe?: Swe
  mah?: Mah
  fil?: Fil
  sot?: Sot
  urd?: Urd
  aym?: Aym
  que?: Que
  swa?: Swa
}

export interface Ara {
  official: string
  common: string
}

export interface Eng {
  official: string
  common: string
}

export interface Tir {
  official: string
  common: string
}

export interface Ita {
  official: string
  common: string
}

export interface Spa {
  official: string
  common: string
}

export interface Fra {
  official: string
  common: string
}

export interface Por {
  official: string
  common: string
}

export interface Nld {
  official: string
  common: string
}

export interface Div {
  official: string
  common: string
}

export interface Nep {
  official: string
  common: string
}

export interface Swe {
  official: string
  common: string
}

export interface Mah {
  official: string
  common: string
}

export interface Fil {
  official: string
  common: string
}

export interface Sot {
  official: string
  common: string
}

export interface Urd {
  official: string
  common: string
}

export interface Aym {
  official: string
  common: string
}

export interface Que {
  official: string
  common: string
}

export interface Swa {
  official: string
  common: string
}

export interface Currencies {
  ERN?: Ern
  EUR?: Eur
  NIO?: Nio
  XAF?: Xaf
  SRD?: Srd
  MVR?: Mvr
  EGP?: Egp
  ILS?: Ils
  JOD?: Jod
  NPR?: Npr
  USD?: Usd
  PAB?: Pab
  PHP?: Php
  XPF?: Xpf
  LSL?: Lsl
  ZAR?: Zar
  XOF?: Xof
  SYP?: Syp
  MZN?: Mzn
  PKR?: Pkr
  GTQ?: Gtq
  PEN?: Pen
  TZS?: Tzs
  BHD?: Bhd
}

export interface Ern {
  name: string
  symbol: string
}

export interface Eur {
  name: string
  symbol: string
}

export interface Nio {
  name: string
  symbol: string
}

export interface Xaf {
  name: string
  symbol: string
}

export interface Srd {
  name: string
  symbol: string
}

export interface Mvr {
  name: string
  symbol: string
}

export interface Egp {
  name: string
  symbol: string
}

export interface Ils {
  name: string
  symbol: string
}

export interface Jod {
  name: string
  symbol: string
}

export interface Npr {
  name: string
  symbol: string
}

export interface Usd {
  name: string
  symbol: string
}

export interface Pab {
  name: string
  symbol: string
}

export interface Php {
  name: string
  symbol: string
}

export interface Xpf {
  name: string
  symbol: string
}

export interface Lsl {
  name: string
  symbol: string
}

export interface Zar {
  name: string
  symbol: string
}

export interface Xof {
  name: string
  symbol: string
}

export interface Syp {
  name: string
  symbol: string
}

export interface Mzn {
  name: string
  symbol: string
}

export interface Pkr {
  name: string
  symbol: string
}

export interface Gtq {
  name: string
  symbol: string
}

export interface Pen {
  name: string
  symbol: string
}

export interface Tzs {
  name: string
  symbol: string
}

export interface Bhd {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  ara?: string
  eng?: string
  tir?: string
  ita?: string
  spa?: string
  fra?: string
  por?: string
  nld?: string
  div?: string
  cat?: string
  eus?: string
  glc?: string
  nep?: string
  swe?: string
  mah?: string
  fil?: string
  sot?: string
  urd?: string
  aym?: string
  que?: string
  swa?: string
}

export interface Translations {
  ara: Ara2
  bre: Bre
  ces: Ces
  cym: Cym
  deu: Deu
  est: Est
  fin: Fin
  fra: Fra2
  hrv: Hrv
  hun: Hun
  ita: Ita2
  jpn: Jpn
  kor: Kor
  nld: Nld2
  per: Per
  pol: Pol
  por: Por2
  rus: Rus
  slk: Slk
  spa: Spa2
  srp: Srp
  swe: Swe2
  tur: Tur
  urd: Urd2
  zho: Zho
}

export interface Ara2 {
  official: string
  common: string
}

export interface Bre {
  official: string
  common: string
}

export interface Ces {
  official: string
  common: string
}

export interface Cym {
  official: string
  common: string
}

export interface Deu {
  official: string
  common: string
}

export interface Est {
  official: string
  common: string
}

export interface Fin {
  official: string
  common: string
}

export interface Fra2 {
  official: string
  common: string
}

export interface Hrv {
  official: string
  common: string
}

export interface Hun {
  official: string
  common: string
}

export interface Ita2 {
  official: string
  common: string
}

export interface Jpn {
  official: string
  common: string
}

export interface Kor {
  official: string
  common: string
}

export interface Nld2 {
  official: string
  common: string
}

export interface Per {
  official: string
  common: string
}

export interface Pol {
  official: string
  common: string
}

export interface Por2 {
  official: string
  common: string
}

export interface Rus {
  official: string
  common: string
}

export interface Slk {
  official: string
  common: string
}

export interface Spa2 {
  official: string
  common: string
}

export interface Srp {
  official: string
  common: string
}

export interface Swe2 {
  official: string
  common: string
}

export interface Tur {
  official: string
  common: string
}

export interface Urd2 {
  official: string
  common: string
}

export interface Zho {
  official: string
  common: string
}

export interface Demonyms {
  eng: Eng2
  fra?: Fra3
}

export interface Eng2 {
  f: string
  m: string
}

export interface Fra3 {
  f: string
  m: string
}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt?: string
}

export interface CoatOfArms {
  png?: string
  svg?: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex?: string
}

export interface Gini {
  "2017"?: number
  "2019"?: number
  "2014"?: number
  "2010"?: number
  "2018"?: number
  "2003"?: number
  "2009"?: number
  "2016"?: number
  "1999"?: number
}
