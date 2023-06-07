import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi', 
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '4592dc10d4msh635bd904a0264dfp1c23d7jsnea66308b8d0b');

                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world' }),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
            getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
            }),
        });
        
        export const {
            useGetTopChartsQuery,
            useGetSongsByGenreQuery,
            useGetSongsByCountryQuery,
            useGetSongsBySearchQuery,
            useGetArtistDetailsQuery,
            useGetSongDetailsQuery,
            useGetSongRelatedQuery,
        } = shazamCoreApi;