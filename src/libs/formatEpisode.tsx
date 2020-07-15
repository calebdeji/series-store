const formatEpisode = (season: number, episode: number) => {
    const isSeasonLength1 = season.toString().length === 1;
    const isEpisodeLength1 = episode.toString().length === 1;
    let seasonToReturn = isSeasonLength1 ? `0${season}` : season;
    let episodeToReturn = isEpisodeLength1 ? `0${episode}` : episode;
    return `S${seasonToReturn}E${episodeToReturn}`;
};
export default formatEpisode;
