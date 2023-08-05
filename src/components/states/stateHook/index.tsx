import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./styleHook.css";

interface Image {
  nasa_id: string;
  title: string;
  media_type: string;
  href: string;
}

export default function ImageList(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://images-api.nasa.gov/search?q=nebula&media_type=image"
      );
      const data = await response.json();
      const items = data.collection.items;

      const parsedImages: Image[] = items.map((item: any) => ({
        nasa_id: item.data[0].nasa_id,
        title: item.data[0].title,
        media_type: item.data[0].media_type,
        href: item.links[0].href,
      }));

      setImages(parsedImages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="divMain">
      <h1 className="titleGalaxy">Nebulosas</h1>
      <Box className="boxStyle">
        {images.map((image) => (
          <div className="divStyle" key={image.nasa_id}>
            <h3 className="nameGalaxy">{image.title}</h3>
            {image.media_type === "image" ? (
              <img src={image.href} alt={image.title}style={{ minHeight: 250, maxHeight: 350 }} className="imgGalaxy" />
            ) : (
              <p>Tipo de mídia incompatível</p>
            )}
          </div>
        ))}
      </Box>
    </div>
  );
}
