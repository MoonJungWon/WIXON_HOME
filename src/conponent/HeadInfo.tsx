import Head from 'next/head';

const HeadInfo =  ({title, keyword, contents}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta keyword={keyword} />
            <meta contents={contents} />
        </Head>
    )
}

HeadInfo.defaultProps={
    title: 'WIXON',
    keyword: 'Wixon',
    contents: 'Wixon'
}

export default HeadInfo;