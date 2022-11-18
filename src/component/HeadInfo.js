import Head from 'next/head';

import React, { useState } from 'react';
interface HeadInfoProps  {
    titleProps? : string | undefined;
    keywordProps? : string | undefined;
    contentsProps? : string | undefined;
}
const HeadInfo =  ({titleProps, keywordProps, contentsProps}: HeadInfoProps) => {
    const [title, setTitle] = useState<any>(titleProps || 'WIXON');
    const [keyword, setKeyword] = useState<any>(keywordProps || 'Wixon');
    const [contents, setContents] = useState<any>(contentsProps || 'Wixon');
    console.log(title,keyword, contents)
    return (
        <Head>
            <title>{title}</title>
            {/* 
            charSet?: string | undefined;
            content?: string | undefined;
            httpEquiv?: string | undefined;
            name?: string | undefined;
            media?: string | undefined;
             */}
            {/* <meta keyword={keyword} />
            <meta contents={contents} /> */}
        </Head>
    )
}

// HeadInfo.defaultProps={
//     title: 'WIXON',
//     keyword: 'Wixon',
//     contents: 'Wixon'
// }

export default HeadInfo;