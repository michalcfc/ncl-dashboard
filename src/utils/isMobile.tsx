const isMobile = window.orientation !== undefined || (navigator && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));

export default isMobile;
