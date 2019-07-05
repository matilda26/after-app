// tslint:disable
// this is an auto generated file. This will be overwritten

export const getDiaryEntry = `query GetDiaryEntry($id: ID!) {
  getDiaryEntry(id: $id) {
    id
    date
    userID
    diaryBody
  }
}
`;
export const listDiaryEntrys = `query ListDiaryEntrys(
  $filter: ModelDiaryEntryFilterInput
  $limit: Int
  $nextToken: String
) {
  listDiaryEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      userID
      diaryBody
    }
    nextToken
  }
}
`;
