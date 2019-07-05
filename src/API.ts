/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateDiaryEntryInput = {
  id?: string | null,
  date?: string | null,
  userID?: string | null,
  diaryBody?: string | null,
};

export type UpdateDiaryEntryInput = {
  id: string,
  date?: string | null,
  userID?: string | null,
  diaryBody?: string | null,
};

export type DeleteDiaryEntryInput = {
  id?: string | null,
};

export type ModelDiaryEntryFilterInput = {
  id?: ModelIDFilterInput | null,
  date?: ModelStringFilterInput | null,
  userID?: ModelStringFilterInput | null,
  diaryBody?: ModelStringFilterInput | null,
  and?: Array< ModelDiaryEntryFilterInput | null > | null,
  or?: Array< ModelDiaryEntryFilterInput | null > | null,
  not?: ModelDiaryEntryFilterInput | null,
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

export type CreateDiaryEntryMutationVariables = {
  input: CreateDiaryEntryInput,
};

export type CreateDiaryEntryMutation = {
  createDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type UpdateDiaryEntryMutationVariables = {
  input: UpdateDiaryEntryInput,
};

export type UpdateDiaryEntryMutation = {
  updateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type DeleteDiaryEntryMutationVariables = {
  input: DeleteDiaryEntryInput,
};

export type DeleteDiaryEntryMutation = {
  deleteDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type GetDiaryEntryQueryVariables = {
  id: string,
};

export type GetDiaryEntryQuery = {
  getDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type ListDiaryEntrysQueryVariables = {
  filter?: ModelDiaryEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDiaryEntrysQuery = {
  listDiaryEntrys:  {
    __typename: "ModelDiaryEntryConnection",
    items:  Array< {
      __typename: "DiaryEntry",
      id: string,
      date: string | null,
      userID: string | null,
      diaryBody: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateDiaryEntrySubscription = {
  onCreateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type OnUpdateDiaryEntrySubscription = {
  onUpdateDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};

export type OnDeleteDiaryEntrySubscription = {
  onDeleteDiaryEntry:  {
    __typename: "DiaryEntry",
    id: string,
    date: string | null,
    userID: string | null,
    diaryBody: string | null,
  } | null,
};
