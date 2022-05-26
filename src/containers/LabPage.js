import styled from 'styled-components';
import { useEffect } from 'react';
import TitleAnimator from '../components/TitleAnimator';
import {
    Content,
    IntroContainer,
    PageTitle,
    Paragraph,
    ArrayLineSeparator,
} from '../components/Styled';

import config from '../config';

const LineArray = styled.div`
    width: 100%;
    gap: 80px;
    display: flex;
    flex-direction: column;
`

const Line = styled.div`
    gap: 24px;
    display: flex;
    flex-direction: row;
`

const LineRight = styled(Line)`
    justify-content: flex-end;
`

const LineLeft = styled(Line)`
    justify-content: flex-start;
`

const PostContainer = styled.div`
    gap: 25px;
    display: flex;
    flex-direction: column;
    width: 35%;
`

const PostInfo = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
`

const Post = ({object}) => {

    return (
        <PostContainer>
            <img alt={""} src={object.img}/>
            <PostInfo>
                <p>{object.name}</p>
                <p>{object.subject}</p>
            </PostInfo>
            <ArrayLineSeparator/>
        </PostContainer>
    );
}

const BuildLines = (array, columnCount) => {
    let ligneArray = []
    let switchCount = columnCount * 2

    for (let i = 0; i < array.length; i += columnCount) {

        let lineContent = []
        for (let n = i; n < array.length && n < i + columnCount ; n++) {
            lineContent.push(<Post key={n} object={array[n]}/>)
        }

        ligneArray.push(i % switchCount === 0 ?
            <LineLeft key={i} > {lineContent} </LineLeft>
            :
            <LineRight key={i} > {lineContent} </LineRight>
        )
    }
    return (ligneArray)
}

const LabPage = (props) => {

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect(() => {
        mountCallback();
        return unmountCallback;
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container'>
                <PageTitle className='column-1'>
                    <TitleAnimator texte="THE LAB"/>
                </PageTitle>
                <Paragraph className='column-2'>
                    <p>
                        Here are some experiments I did in 3d, graphic design, web design, photography or many other things ...
                    </p>
                    <p>
                        Discover more on my <a href="https://www.instagram.com/a2.lab/" target="_blank" rel="noreferrer">instagram</a>
                    </p>
                </Paragraph>
                <span className='column-3'/>
            </IntroContainer>
            <LineArray>
                {BuildLines(config.lab, 2)}
            </LineArray>
        </Content>
    );
}



export default LabPage;
