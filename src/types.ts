/******************************************************************************
 *  (c) 2018 - 2024 Zondax AG
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *****************************************************************************/

export type AddressResponse = {
  address: string
  publicKey: Buffer
}

export type AddressExtendedResponse = {
  chainCode: Buffer
  publicKey: Buffer
  version: number
  index: number
  depth: number
  parentFingerprint: Buffer
  extendedPk: string
}

export type IvkResponse = {
  ivk: Buffer
  defaultDiversifier: Buffer
}

export type OvkResponse = {
  ovk: Buffer
}

export type FvkResponse = {
  ak: Buffer
  nk: Buffer
  ovk: Buffer
}

export type DiversifierListResponse = {
  diversifiers: Buffer[]
}

export type NullifierResponse = {
  nf: Buffer
}

export type InitTxResponse = {
  txDataHash: Buffer
}

export type SpendSignatureResponse = {
  signature: Buffer
}

export type TransaparentSignatureResponse = {
  signature: Buffer
}

export type OutputDataResponse = {
  rcv: Buffer
  rseed: Buffer
  hashSeed?: Buffer
}

export type ExtractSpendResponse = {
  key: Buffer
  rcv: Buffer
  alpha: Buffer
}

export type CheckAndSignResponse = {
  builtTxDataHash: Buffer
}
