const size = {
    mobile: '767px',
    tablet: '1199px',
    desktop: '1200px',
};

const theme = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
};
export default theme;