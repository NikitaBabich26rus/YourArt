import React, {FC, useMemo, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {SimilarArts} from "../api/Models";
import ApiSingleton from "../api/Api";

const SearchField: FC = () => {
    const [similarArts, setSimilarArts] = useState<SimilarArts[]>([])

    const getSimilarArts = async () => {
        const result = await ApiSingleton._artsApi.getSimilarArts()
        setSimilarArts(result)
    }

    useMemo(() => {
        (async () => {
            await getSimilarArts()
        })()
    }, []);

    return (
        <Autocomplete
            onChange={(event, value) => {
                event.persist()
                window.location.assign('/art/' + (value as SimilarArts).id)
            }}
            freeSolo
            disablePortal
            id="combo-box-demo"
            options={similarArts}
            getOptionLabel={art => art.artName!}
            sx={{width: 300, color: '#e0e0e0'}}
            renderInput={(params) =>
                <TextField
                    sx={{ color: '#e0e0e0' }}
                    {...params}
                    label="Search arts"
                    InputProps={{
                        ...params.InputProps,
                    }}
                />
            }
        />
    );
};

export default React.memo(SearchField);