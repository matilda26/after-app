/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateCloseFriendInput = {
  id?: string | null,
  name: string,
  howYouMet?: string | null,
  whenYouMet?: string | null,
  favouriteSaying?: string | null,
  favouriteTraits?: string | null,
  message?: string | null,
};

export type UpdateCloseFriendInput = {
  id: string,
  name?: string | null,
  howYouMet?: string | null,
  whenYouMet?: string | null,
  favouriteSaying?: string | null,
  favouriteTraits?: string | null,
  message?: string | null,
};

export type DeleteCloseFriendInput = {
  id?: string | null,
};

export type ModelCloseFriendFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  howYouMet?: ModelStringFilterInput | null,
  whenYouMet?: ModelStringFilterInput | null,
  favouriteSaying?: ModelStringFilterInput | null,
  favouriteTraits?: ModelStringFilterInput | null,
  message?: ModelStringFilterInput | null,
  and?: Array< ModelCloseFriendFilterInput | null > | null,
  or?: Array< ModelCloseFriendFilterInput | null > | null,
  not?: ModelCloseFriendFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateCloseFriendMutationVariables = {
  input: CreateCloseFriendInput,
};

export type CreateCloseFriendMutation = {
  createCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type UpdateCloseFriendMutationVariables = {
  input: UpdateCloseFriendInput,
};

export type UpdateCloseFriendMutation = {
  updateCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type DeleteCloseFriendMutationVariables = {
  input: DeleteCloseFriendInput,
};

export type DeleteCloseFriendMutation = {
  deleteCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type GetCloseFriendQueryVariables = {
  id: string,
};

export type GetCloseFriendQuery = {
  getCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type ListCloseFriendsQueryVariables = {
  filter?: ModelCloseFriendFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCloseFriendsQuery = {
  listCloseFriends:  {
    __typename: "ModelCloseFriendConnection",
    items:  Array< {
      __typename: "CloseFriend",
      id: string,
      name: string,
      howYouMet: string | null,
      whenYouMet: string | null,
      favouriteSaying: string | null,
      favouriteTraits: string | null,
      message: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCloseFriendSubscription = {
  onCreateCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type OnUpdateCloseFriendSubscription = {
  onUpdateCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};

export type OnDeleteCloseFriendSubscription = {
  onDeleteCloseFriend:  {
    __typename: "CloseFriend",
    id: string,
    name: string,
    howYouMet: string | null,
    whenYouMet: string | null,
    favouriteSaying: string | null,
    favouriteTraits: string | null,
    message: string | null,
  } | null,
};
