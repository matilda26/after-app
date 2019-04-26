// tslint:disable
// this is an auto generated file. This will be overwritten

export const getCloseFriend = `query GetCloseFriend($id: ID!) {
  getCloseFriend(id: $id) {
    id
    name
    howYouMet
    whenYouMet
    favouriteSaying
    favouriteTraits
    message
  }
}
`;
export const listCloseFriends = `query ListCloseFriends(
  $filter: ModelCloseFriendFilterInput
  $limit: Int
  $nextToken: String
) {
  listCloseFriends(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      howYouMet
      whenYouMet
      favouriteSaying
      favouriteTraits
      message
    }
    nextToken
  }
}
`;
