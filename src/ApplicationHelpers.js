import path from 'path';
import YAML from 'yaml';
import {each} from 'async';
import request from 'request-promise';

const uriBase = "https://git.door43.org/";

// Purpose: application wide
// Scope: limited to resource manifests and information

export const username = 'unfoldingword';
export const resourceRepositories = (languageId) => {
  return {
    ult: languageId + '_ult',
    tn: languageId + '-tn',
    ugl: languageId + '_ugl',
    ta: languageId + '-ta',
    tw: languageId + '-tw',
    ugnt: 'UGNT',
  };
};

export const fetchResourceManifests = (username, languageId) => new Promise((resolve, reject) => {
  let manifests = {};
  const _resourceRepositories = resourceRepositories(languageId);
  const resourceIds = Object.keys(_resourceRepositories);
  each(
    resourceIds,
    (resourceId, done) => {
      const repository = _resourceRepositories[resourceId];
      fetchManifest(username, repository)
      .then(manifest => {
        manifests[resourceId] = manifest;
        done();
      }).catch(reject);
    },
    (error) => {
      if (error) reject(error);
      resolve(manifests);
    }
  );
});

export const fetchManifest = (username, repository) => new Promise((resolve, reject) => {
  fetchFileFromServer(username, repository, 'manifest.yaml')
  .then(yaml => {
    const json = YAML.parseDocument(yaml).toJSON();
    resolve(json);
  }).catch(reject);
});

// https://git.door43.org/unfoldingword/en_ult/raw/branch/master/manifest.yaml
export const fetchFileFromServer = (username, repository, filepath, branch='master') => new Promise((resolve, reject) => {
  const uri = path.join(username, repository, 'raw/branch', branch, filepath);
  get(uri).then(resolve).catch(reject);
});

export const get = (_uri) => new Promise((resolve, reject) => {
  const uri = uriBase + _uri;
  request(uri).then(resolve).catch(reject);
});
