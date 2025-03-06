import React from 'react';

const useBlogsData = async () => {
    const res = await fetch(`../blogData.json()`, {
        cache: 'no-cache'
    });
    return res.json()
};

export default useBlogsData;