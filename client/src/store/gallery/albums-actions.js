import { albumActions } from './album-slice';

export const fetchAlbumsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/album');

      if (!response.ok) {
        throw new Error('Could not fetch album data!');
      }

      const data = await response.json();
      return data;
    };

    try {
      const albumsData = await fetchData();
      dispatch(
        albumActions.setAlbums({
          items: albumsData.items || [],
        })
      );
    } catch (error) {
      console.log('Erro no album-actions');
    }
  };
};
