import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/advertsSlice';
// import { filterReducer } from './contacts/filterSlice';

// import storage from 'redux-persist/lib/storage';
// import { authReducer } from './auth/authSlice';

import {
    persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        // filter: filterReducer,
        // auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);
