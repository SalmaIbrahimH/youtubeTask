export interface details{kind:     string;
etag:     string;
items:    Item[];
pageInfo: PageInfo;
}

export interface Item {
kind:           string;
etag:           string;
id:             string;
contentDetails: ContentDetails;
statistics:     Statistics;
}

export interface ContentDetails {
duration:        string;
dimension:       string;
definition:      string;
caption:         string;
licensedContent: boolean;
contentRating:   ContentRating;
projection:      string;
}

export interface ContentRating {
}

export interface Statistics {
viewCount:     string;
likeCount:     string;
dislikeCount:  string;
favoriteCount: string;
commentCount:  string;
}

export interface PageInfo {
totalResults:   number;
resultsPerPage: number;
}