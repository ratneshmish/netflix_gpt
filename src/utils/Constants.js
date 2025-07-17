export const LOGO_URL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY,
  }
};


export const IMAGE_URL="https://image.tmdb.org/t/p/w500";

export const BG_LOGIN="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg";

export const LANG_SELECT=[{identifier:"en",name:"English"},{identifier:"hindi",name:"Hindi"},{identifier:"russian",name:"Russian"}];

