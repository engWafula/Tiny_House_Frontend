/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LogOut
// ====================================================

export interface LogOut_logOut {
  __typename: "Viewer";
  token: string | null;
  id: string | null;
  avatar: string | null;
  didRequest: boolean;
  hasWallet: boolean | null;
}

export interface LogOut {
  logOut: LogOut_logOut;
}
