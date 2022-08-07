const size = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1200px',
};

const theme = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
};

export default theme;