import { Router } from "express";
import * as AlbumsController from './albums.controller';

const router = Router();
router
    .route('/albums')
    .get(AlbumsController.readAlbums);

router
    .route('/albums/:artist')
    .get(AlbumsController.readAlbumsByArtist);

router
    .route('/albums/search/artist/:search')
    .get(AlbumsController.readAlbumsByArtistSearch);

router
    .route('/albums/search/description/:search')
    .get(AlbumsController.readAlbumsByDescriptionSearch);

router
    .route('/albums')
    .get(AlbumsController.createAlbum);

router
    .route('/albums')
    .get(AlbumsController.updateAlbum);

router
    .route('/albums')
    .get(AlbumsController.deleteAlbum);

export default router;