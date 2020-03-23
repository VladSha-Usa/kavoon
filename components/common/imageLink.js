const ImageLink = ({ href, src, hoverSrc, imgWidth, imgHeight }) => {
  return (
    <>
      <a href={href}>
        <div className="hover-link"></div>
      </a>
      <style jsx>{`
      .hover-link {
        background-image: url('${src}');
        width: ${imgWidth};
        height: ${imgHeight};
      }
      .hover-link:hover {
        background-image: url('${hoverSrc}');
        width: ${imgWidth};
        height: ${imgHeight};
      }
      `}</style>
    </>
  );
};

export default ImageLink;
