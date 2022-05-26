import { useEffect } from 'react';
import styled from 'styled-components';
import ProjectArray from '../components/ProjectArray';
import {
    IntroContainer,
    PageTitle,
    Paragraph,
    Content,
} from '../components/Styled';


const ParagraphBot = styled(Paragraph)`
    justify-content: flex-end;
`

const Banner = styled.div`
    margin-top: 100px;
    font-size: 144px;
`


const PageTitleHome = styled(PageTitle)`
    margin-bottom: 100px;
`

const HomePage = (props) => {
    const setMarginTop = () => {
        const height = window.innerHeight - (document.getElementById('intro')?.clientHeight + document.getElementById('nav')?.clientHeight + 250);
        document.getElementById('logo').style.marginTop = `${height > 0 ? height : 0}px`;
    };

    const mountCallback = props.mountCallback;
    const unmountCallback = props.unmountCallback;

    useEffect((props) => {
        setMarginTop();
        window.addEventListener('resize', setMarginTop);
        mountCallback();
        return () => {
            window.removeEventListener('resize', setMarginTop);
            unmountCallback();
        };
    }, [mountCallback, unmountCallback]);

    return (
        <Content>
            <IntroContainer className='columns-container' id='intro'>
                <div>
                    <PageTitleHome className='column-1'>DIGITAL DESIGNER &#38; <br/> ART DIRECTOR</PageTitleHome>
                    <p>
                        France based but working world wide.
                    </p>
                </div>
                <Paragraph className='column-2'>
                    <p>
                        Focus on digital products, visual identity and art direction, to help companies, brands and entrepreneurs develop and achieve their goals.
                    </p>
                </Paragraph>
                <span className='column-3'/>
            </IntroContainer>
            <div id='logo' className='columns-container'>
                <div  className='column-1'>
                    <A2moyMulticolor/>
                </div>
                <ParagraphBot className='column-2'>
                    <p>
                        Experimentation, curiosity and use of mediums are the key words of my apprehension of design’s world. Constantly looking for new things, I develop my ideas to enhance the experience that guides both the brand and the users.
                    </p>
                    <p>
                        Communicating, collaborating and sharing are the words that are part of my daily life.
                    </p>
                    <a href="url">more here</a>
                </ParagraphBot>
                <span className='column-3'></span>
            </div>
            <Banner>
                selected works-
            </Banner>
            <ProjectArray/>
        </Content>
    );
}

const A2moyMulticolor = () => {
    return (
        <svg width="504" height="522" viewBox="0 0 504 522" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M476.286 418.443C470.804 418.443 465.446 416.817 460.888 413.77C456.33 410.723 452.778 406.393 450.68 401.326C448.583 396.259 448.034 390.684 449.103 385.305C450.173 379.926 452.812 374.985 456.688 371.107C460.564 367.229 465.503 364.588 470.879 363.518C476.255 362.448 481.827 362.997 486.892 365.096C491.956 367.195 496.284 370.749 499.33 375.309C502.375 379.869 504 385.23 504 390.714C503.992 398.066 501.07 405.114 495.874 410.313C490.678 415.511 483.633 418.435 476.286 418.443ZM476.286 370.978C472.383 370.978 468.568 372.136 465.324 374.305C462.079 376.474 459.55 379.558 458.057 383.165C456.564 386.772 456.173 390.741 456.935 394.571C457.697 398.4 459.576 401.917 462.336 404.678C465.095 407.439 468.611 409.318 472.439 410.08C476.266 410.841 480.233 410.449 483.839 408.955C487.444 407.46 490.525 404.929 492.692 401.683C494.86 398.436 496.016 394.619 496.016 390.714C496.009 385.481 493.929 380.464 490.23 376.764C486.531 373.064 481.516 370.983 476.286 370.978Z" fill="#029CE6"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M447.733 381.924C446.286 386.642 446.024 391.662 446.994 396.531C448.148 402.327 450.994 407.65 455.172 411.828C459.349 416.006 464.672 418.85 470.465 420.002C472.324 420.371 474.205 420.561 476.083 420.574C476.21 422.32 476.273 424.123 476.273 425.983V484.972V519.576H438.401C438.401 518.691 438.407 517.569 438.413 516.336L438.413 516.333C438.428 513.459 438.446 509.984 438.401 507.507C433.318 515.385 424.502 521.218 399.698 521.218C365.891 521.218 351.628 502.23 351.628 480.474C351.628 448.515 377.278 433.766 418.393 433.766H434.999C435.902 433.766 436.767 433.407 437.406 432.769C438.044 432.131 438.404 431.265 438.405 430.362V425.192C438.405 415.59 438.405 410.648 435.935 408.105C433.317 405.41 427.923 405.41 416.812 405.41C406.152 405.41 400.723 405.41 397.959 408.123C395.09 410.939 395.09 416.677 395.09 428.368H358.576C358.576 393.641 374.288 377.673 418.277 377.673C429.715 377.673 439.565 379.056 447.733 381.924ZM438.437 460.755C438.437 459.054 438.437 458.203 438.011 457.777C437.586 457.351 436.734 457.351 435.031 457.351H435.031H422.617H422.617C407.543 457.351 400.724 457.351 397.639 460.746C395.09 463.55 395.09 468.67 395.09 478.021C395.09 487.935 395.09 492.596 397.417 494.788C399.482 496.733 403.379 496.733 410.734 496.733C438.437 496.733 438.437 496.733 438.437 461.035V460.755Z" fill="#029CE6"/>
            <path d="M466.506 404.638V404.253C466.506 399.389 468.687 395.432 474.714 391.029C478.648 388.149 479.836 387.149 479.836 384.711C479.836 380.927 479.836 380.927 476.32 380.927C472.226 380.927 472.226 380.958 472.226 386.28H466.379C466.379 379.358 469.945 376.201 476.32 376.201C483.478 376.201 485.928 379.339 485.928 384.661C485.928 388.729 484.18 390.698 479.054 394.305C475.604 396.728 474.243 398.316 473.767 399.577H486.192V404.638H466.506Z" fill="#029CE6"/>
            <path d="M300.471 418.443C294.99 418.443 289.631 416.817 285.074 413.77C280.516 410.723 276.964 406.393 274.866 401.326C272.768 396.259 272.22 390.684 273.289 385.305C274.358 379.926 276.998 374.985 280.874 371.107C284.75 367.229 289.688 364.588 295.064 363.518C300.44 362.448 306.013 362.997 311.077 365.096C316.141 367.195 320.47 370.749 323.515 375.309C326.56 379.869 328.186 385.23 328.186 390.714C328.178 398.066 325.255 405.114 320.059 410.313C314.864 415.511 307.819 418.435 300.471 418.443ZM300.471 370.978C296.569 370.978 292.754 372.136 289.509 374.305C286.265 376.474 283.736 379.558 282.243 383.165C280.749 386.772 280.359 390.741 281.121 394.571C281.882 398.4 283.762 401.917 286.521 404.678C289.281 407.439 292.797 409.318 296.624 410.08C300.452 410.841 304.419 410.449 308.024 408.955C311.629 407.46 314.71 404.929 316.878 401.683C319.045 398.436 320.202 394.619 320.201 390.714C320.195 385.481 318.114 380.464 314.415 376.764C310.716 373.064 305.702 370.983 300.471 370.978Z" fill="#EA8102"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M271.919 381.923C270.471 386.642 270.21 391.662 271.179 396.531C272.333 402.327 275.179 407.65 279.357 411.828C283.535 416.006 288.857 418.85 294.65 420.002C296.51 420.371 298.391 420.561 300.269 420.574C300.395 422.32 300.458 424.123 300.458 425.983V484.972V519.576H262.586C262.586 518.691 262.592 517.569 262.598 516.336L262.598 516.333C262.613 513.459 262.631 509.984 262.586 507.507C257.504 515.385 248.687 521.218 223.884 521.218C190.076 521.218 175.814 502.23 175.814 480.474C175.814 448.515 201.464 433.766 242.578 433.766H259.184C260.087 433.766 260.953 433.407 261.591 432.769C262.23 432.131 262.589 431.265 262.59 430.362V425.192C262.59 415.59 262.59 410.648 260.121 408.105C257.503 405.41 252.109 405.41 240.997 405.41C230.337 405.41 224.909 405.41 222.144 408.123C219.276 410.939 219.276 416.677 219.276 428.368H182.762C182.762 393.641 198.473 377.673 242.462 377.673C253.9 377.673 263.75 379.056 271.919 381.923ZM262.622 460.755C262.622 459.054 262.622 458.203 262.197 457.777C261.771 457.351 260.92 457.351 259.217 457.351H259.216H246.803H246.803C231.729 457.351 224.91 457.351 221.825 460.746C219.276 463.55 219.276 468.67 219.276 478.021C219.276 487.935 219.276 492.596 221.603 494.788C223.667 496.733 227.564 496.733 234.92 496.733C262.622 496.733 262.622 496.733 262.622 461.035V460.755Z" fill="#EA8102"/>
            <path d="M290.691 404.638V404.253C290.691 399.389 292.873 395.432 298.9 391.029C302.833 388.149 304.022 387.149 304.022 384.711C304.022 380.927 304.022 380.927 300.506 380.927C296.411 380.927 296.411 380.958 296.411 386.28H290.565C290.565 379.358 294.13 376.201 300.506 376.201C307.664 376.201 310.114 379.339 310.114 384.661C310.114 388.729 308.365 390.698 303.24 394.305C299.789 396.728 298.428 398.316 297.953 399.577H310.378V404.638H290.691Z" fill="#EA8102"/>
            <path d="M124.657 418.443C119.176 418.443 113.817 416.817 109.26 413.77C104.702 410.723 101.15 406.393 99.0521 401.326C96.9544 396.259 96.4055 390.684 97.4749 385.305C98.5443 379.926 101.184 374.985 105.06 371.107C108.936 367.229 113.874 364.588 119.25 363.518C124.626 362.448 130.199 362.997 135.263 365.096C140.327 367.195 144.656 370.749 147.701 375.309C150.746 379.869 152.372 385.23 152.372 390.714C152.364 398.066 149.441 405.114 144.245 410.313C139.05 415.511 132.005 418.435 124.657 418.443ZM124.657 370.978C120.755 370.978 116.94 372.136 113.695 374.305C110.451 376.474 107.922 379.558 106.429 383.165C104.935 386.772 104.545 390.741 105.307 394.571C106.068 398.4 107.948 401.917 110.707 404.678C113.467 407.439 116.983 409.318 120.81 410.08C124.638 410.841 128.605 410.449 132.21 408.955C135.815 407.46 138.896 404.929 141.064 401.683C143.231 398.436 144.388 394.619 144.387 390.714C144.381 385.481 142.3 380.464 138.601 376.764C134.903 373.064 129.888 370.983 124.657 370.978Z" fill="#02A710"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M96.1052 381.924C94.6574 386.642 94.3963 391.662 95.3659 396.531C96.52 402.327 99.3658 407.65 103.544 411.828C107.721 416.006 113.043 418.85 118.837 420.002C120.696 420.371 122.577 420.561 124.455 420.574C124.581 422.32 124.645 424.123 124.645 425.983V484.972V519.576H86.7724C86.7724 518.691 86.7782 517.569 86.7845 516.336L86.7845 516.333C86.7993 513.459 86.8171 509.984 86.7724 507.507C81.6895 515.385 72.8733 521.218 48.0698 521.218C14.2624 521.218 0 502.23 0 480.474C0 448.515 25.65 433.766 66.7643 433.766H83.3705C84.2731 433.766 85.1388 433.407 85.7774 432.769C86.4161 432.131 86.7754 431.265 86.7764 430.362V425.192C86.7764 415.59 86.7764 410.648 84.3067 408.105C81.6886 405.41 76.2948 405.41 65.1831 405.41C54.5232 405.41 49.0948 405.41 46.3304 408.123C43.4621 410.939 43.4621 416.677 43.4621 428.368H6.94754C6.94754 393.641 22.6594 377.673 66.6485 377.673C78.0867 377.673 87.9368 379.056 96.1052 381.924ZM86.8084 460.755C86.8084 459.054 86.8084 458.203 86.3829 457.777C85.9573 457.351 85.1058 457.351 83.4026 457.351H83.4025H70.9887H70.9886C55.915 457.351 49.0957 457.351 46.0107 460.746C43.4621 463.55 43.4621 468.67 43.4621 478.021C43.4621 487.935 43.4621 492.596 45.7886 494.788C47.8534 496.733 51.7504 496.733 59.106 496.733C86.8083 496.733 86.8084 496.733 86.8084 461.035V460.755Z" fill="#02A710"/>
            <path d="M114.877 404.638V404.253C114.877 399.389 117.059 395.432 123.086 391.029C127.019 388.149 128.208 387.149 128.208 384.711C128.208 380.927 128.208 380.927 124.692 380.927C120.598 380.927 120.598 380.958 120.598 386.28H114.751C114.751 379.358 118.316 376.201 124.692 376.201C131.85 376.201 134.3 379.339 134.3 384.661C134.3 388.729 132.551 390.698 127.426 394.305C123.975 396.728 122.614 398.316 122.139 399.577H134.564V404.638H114.877Z" fill="#02A710"/>
            <path d="M300.471 236.769C294.99 236.769 289.631 235.142 285.074 232.096C280.516 229.049 276.964 224.718 274.866 219.651C272.768 214.584 272.22 209.009 273.289 203.63C274.358 198.251 276.998 193.31 280.874 189.432C284.75 185.554 289.688 182.913 295.064 181.843C300.44 180.773 306.013 181.323 311.077 183.421C316.141 185.52 320.47 189.074 323.515 193.634C326.56 198.194 328.186 203.555 328.186 209.04C328.178 216.391 325.255 223.44 320.059 228.638C314.864 233.837 307.819 236.761 300.471 236.769ZM300.471 189.303C296.569 189.303 292.754 190.461 289.509 192.63C286.265 194.8 283.736 197.883 282.243 201.49C280.749 205.097 280.359 209.067 281.121 212.896C281.882 216.725 283.762 220.243 286.521 223.003C289.281 225.764 292.797 227.644 296.624 228.405C300.452 229.166 304.419 228.775 308.024 227.28C311.629 225.785 314.71 223.254 316.878 220.008C319.045 216.761 320.202 212.944 320.201 209.04C320.195 203.806 318.114 198.789 314.415 195.089C310.716 191.389 305.702 189.308 300.471 189.303Z" fill="#F92607"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M271.919 200.249C270.471 204.967 270.21 209.987 271.179 214.856C272.333 220.652 275.179 225.975 279.357 230.153C283.535 234.331 288.857 237.175 294.65 238.327C296.51 238.696 298.391 238.886 300.269 238.899C300.395 240.645 300.458 242.448 300.458 244.309V303.297V337.901H262.586C262.586 337.016 262.592 335.894 262.598 334.661L262.598 334.658C262.613 331.784 262.631 328.309 262.586 325.833C257.504 333.711 248.687 339.543 223.884 339.543C190.076 339.543 175.814 320.555 175.814 298.799C175.814 266.84 201.464 252.091 242.578 252.091H259.184C260.087 252.091 260.953 251.732 261.591 251.094C262.23 250.456 262.589 249.59 262.59 248.687V243.518C262.59 233.915 262.59 228.973 260.121 226.431C257.503 223.735 252.109 223.735 240.997 223.735C230.337 223.735 224.909 223.735 222.144 226.449C219.276 229.265 219.276 235.002 219.276 246.694H182.762C182.762 211.966 198.473 195.998 242.462 195.998C253.9 195.998 263.75 197.382 271.919 200.249ZM262.622 279.08C262.622 277.379 262.622 276.528 262.197 276.102C261.771 275.677 260.92 275.677 259.217 275.677H259.216H246.803H246.803C231.729 275.677 224.91 275.677 221.825 279.071C219.276 281.875 219.276 286.995 219.276 296.346C219.276 306.26 219.276 310.922 221.603 313.113C223.667 315.058 227.564 315.058 234.92 315.058C262.622 315.058 262.622 315.058 262.622 279.36V279.08Z" fill="#F92607"/>
            <path d="M290.691 222.963V222.579C290.691 217.714 292.873 213.757 298.9 209.354C302.833 206.474 304.022 205.474 304.022 203.036C304.022 199.252 304.022 199.252 300.506 199.252C296.411 199.252 296.411 199.283 296.411 204.605H290.565C290.565 197.683 294.13 194.526 300.506 194.526C307.664 194.526 310.114 197.664 310.114 202.986C310.114 207.055 308.365 209.023 303.24 212.63C299.789 215.053 298.428 216.641 297.953 217.903H310.378V222.963H290.691Z" fill="#F92607"/>
            <path d="M124.657 55.4581C119.176 55.4581 113.817 53.8319 109.26 50.785C104.702 47.738 101.15 43.4074 99.0521 38.3405C96.9544 33.2737 96.4055 27.6983 97.4749 22.3194C98.5443 16.9405 101.184 11.9996 105.06 8.12167C108.936 4.24369 113.874 1.60275 119.25 0.532819C124.626 -0.537113 130.199 0.0120147 135.263 2.11076C140.327 4.20951 144.656 7.76361 147.701 12.3236C150.746 16.8837 152.372 22.2448 152.372 27.7291C152.364 35.0808 149.441 42.1291 144.245 47.3275C139.05 52.526 132.005 55.45 124.657 55.4581ZM124.657 7.99273C120.755 7.99273 116.94 9.15057 113.695 11.3198C110.451 13.4891 107.922 16.5723 106.429 20.1796C104.935 23.7868 104.545 27.7561 105.307 31.5854C106.068 35.4148 107.948 38.9321 110.707 41.6927C113.467 44.4532 116.983 46.333 120.81 47.0943C124.638 47.8555 128.605 47.464 132.21 45.9694C135.815 44.4747 138.896 41.9439 141.064 38.6972C143.231 35.4504 144.388 31.6335 144.387 27.7291C144.381 22.4959 142.3 17.4788 138.601 13.7787C134.903 10.0787 129.888 7.99781 124.657 7.99273Z" fill="#040205"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M96.1046 18.9382C94.6569 23.6568 94.3958 28.6761 95.3654 33.5456C96.5195 39.3414 99.3653 44.6647 103.543 48.8424C107.721 53.0201 113.043 55.8646 118.836 57.0162C120.696 57.3858 122.577 57.5757 124.455 57.5883C124.581 59.3347 124.645 61.1378 124.645 62.9982V121.987V156.591H86.7724C86.7724 155.706 86.7782 154.584 86.7845 153.351L86.7845 153.347C86.7993 150.473 86.8171 146.998 86.7724 144.522C81.6895 152.4 72.8733 158.233 48.0698 158.233C14.2624 158.233 0 139.245 0 117.489C0 85.5295 25.65 70.7803 66.7643 70.7803H83.3705C84.2731 70.7803 85.1388 70.4218 85.7774 69.7836C86.4161 69.1454 86.7754 68.2797 86.7764 67.3766V62.2072C86.7764 52.6045 86.7764 47.663 84.3067 45.1202C81.6886 42.4245 76.2948 42.4245 65.1831 42.4245C54.5232 42.4245 49.0948 42.4245 46.3304 45.1382C43.4621 47.9541 43.4621 53.6918 43.4621 65.3832H6.94754C6.94754 30.6555 22.6594 14.6879 66.6485 14.6879C78.0864 14.6879 87.9363 16.0711 96.1046 18.9382ZM86.8084 97.7699C86.8084 96.0684 86.8084 95.2175 86.3829 94.7919C85.9573 94.3662 85.1058 94.3662 83.4026 94.3662H83.4025H70.9887H70.9886C55.915 94.3662 49.0957 94.3662 46.0107 97.7604C43.4621 100.564 43.4621 105.685 43.4621 115.036C43.4621 124.95 43.4621 129.611 45.7886 131.803C47.8534 133.748 51.7504 133.748 59.106 133.748C86.8083 133.748 86.8084 133.748 86.8084 98.0495V97.7699Z" fill="#040205"/>
            <path d="M114.877 41.6526V41.2681C114.877 36.4036 117.059 32.4466 123.086 28.0436C127.019 25.1634 128.208 24.1635 128.208 21.7255C128.208 17.9416 128.208 17.9416 124.692 17.9416C120.598 17.9416 120.598 17.9724 120.598 23.2945H114.751C114.751 16.3727 118.316 13.2156 124.692 13.2156C131.85 13.2156 134.3 16.3535 134.3 21.6755C134.3 25.744 132.551 27.7129 127.426 31.3199C123.975 33.7425 122.614 35.3307 122.139 36.592H134.564V41.6526H114.877Z" fill="#040205"/>
            <path d="M476.286 236.769C470.804 236.769 465.446 235.142 460.888 232.096C456.33 229.049 452.778 224.718 450.68 219.651C448.583 214.584 448.034 209.009 449.103 203.63C450.173 198.251 452.812 193.31 456.688 189.432C460.564 185.554 465.503 182.913 470.879 181.843C476.255 180.773 481.827 181.323 486.892 183.421C491.956 185.52 496.284 189.074 499.33 193.634C502.375 198.194 504 203.555 504 209.04C503.992 216.391 501.07 223.44 495.874 228.638C490.678 233.837 483.633 236.761 476.286 236.769ZM476.286 189.303C472.383 189.303 468.568 190.461 465.324 192.63C462.079 194.8 459.55 197.883 458.057 201.49C456.564 205.097 456.173 209.067 456.935 212.896C457.697 216.725 459.576 220.243 462.336 223.003C465.095 225.764 468.611 227.644 472.439 228.405C476.266 229.166 480.233 228.775 483.839 227.28C487.444 225.785 490.525 223.254 492.692 220.008C494.86 216.761 496.016 212.944 496.016 209.04C496.009 203.806 493.929 198.789 490.23 195.089C486.531 191.389 481.516 189.308 476.286 189.303Z" fill="#9B31C5"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M447.733 200.249C446.286 204.967 446.024 209.987 446.994 214.856C448.148 220.652 450.994 225.975 455.172 230.153C459.349 234.331 464.672 237.175 470.465 238.327C472.324 238.696 474.205 238.886 476.083 238.899C476.21 240.645 476.273 242.448 476.273 244.309V303.297V337.901H438.401C438.401 337.016 438.407 335.894 438.413 334.661L438.413 334.658C438.428 331.784 438.446 328.309 438.401 325.833C433.318 333.711 424.502 339.543 399.698 339.543C365.891 339.543 351.628 320.555 351.628 298.799C351.628 266.84 377.278 252.091 418.393 252.091H434.999C435.902 252.091 436.767 251.732 437.406 251.094C438.044 250.456 438.404 249.59 438.405 248.687V243.518C438.405 233.915 438.405 228.973 435.935 226.431C433.317 223.735 427.923 223.735 416.812 223.735C406.152 223.735 400.723 223.735 397.959 226.449C395.09 229.265 395.09 235.002 395.09 246.694H358.576C358.576 211.966 374.288 195.998 418.277 195.998C429.715 195.998 439.565 197.382 447.733 200.249ZM438.437 279.08C438.437 277.379 438.437 276.528 438.011 276.102C437.586 275.677 436.734 275.677 435.031 275.677H435.031H422.617H422.617C407.543 275.677 400.724 275.677 397.639 279.071C395.09 281.875 395.09 286.995 395.09 296.346C395.09 306.26 395.09 310.922 397.417 313.113C399.482 315.058 403.379 315.058 410.734 315.058C438.437 315.058 438.437 315.058 438.437 279.36V279.08Z" fill="#9B31C5"/>
            <path d="M466.506 222.963V222.579C466.506 217.714 468.687 213.757 474.714 209.354C478.648 206.474 479.836 205.474 479.836 203.036C479.836 199.252 479.836 199.252 476.32 199.252C472.226 199.252 472.226 199.283 472.226 204.605H466.379C466.379 197.683 469.945 194.526 476.32 194.526C483.478 194.526 485.928 197.664 485.928 202.986C485.928 207.055 484.18 209.023 479.054 212.63C475.604 215.053 474.243 216.641 473.767 217.903H486.192V222.963H466.506Z" fill="#9B31C5"/>
        </svg>
    )
}

export default HomePage;
