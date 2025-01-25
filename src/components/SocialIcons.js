const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" target="_blank" rel="noreferrer" style={styles.icon} href="https://github.com/sahil8460">
        <i className="fa-brands fa-github" aria-hidden="true" title="Sahil Akbari' GitHub Profile"></i>
      </a>
      <a className="icon" target="_blank" rel="noreferrer" style={styles.icon} href="https://www.linkedin.com/in/er-sahil-akbari-510505194/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Sahil Akbari' LinkedIn Profile"></i>
      </a>
      <a className="icon" target="_blank" rel="noreferrer" style={styles.icon} href="https://www.instagram.com/sahil_____91/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Sahil Akbari' Instagram Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://twitter.com/sahil_akbari">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Sahil Akbari' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
