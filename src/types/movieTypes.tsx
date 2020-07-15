type movieAbstract = {
    id: string;
    name: string;
    image: { medium?: string; original?: string };

    url: string;
    summary: string;
};
export type movieBoxProps = movieAbstract & {
    rating?: {
        average: number;
    };
    season?: number;
    number?: number;
};
export type movieEpisodes = movieAbstract & {
    season: number;
    number: number;
};
export type movieDetails = movieBoxProps & {
    episodes: movieAbstract & {
        season: number;
        number: number;
    };
};
