import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Tooltip } from '@mui/material';

const CardMusic = ({ card }) => {
  return (
    <Tooltip title={`${card.songs.length} songs`} placement="top">
      <div>
        <Card>
          <CardMedia
            component="img"
            alt="Album Image"
            height="140"
            image={card.image}
          />
          <CardContent>
            <Chip
              label={card.follows ? `Followers: ${card.follows}` : `Likes: ${card.likes}`}
            />
          </CardContent>
        </Card>
        <Typography variant="h6">{card.title}</Typography>
      </div>
    </Tooltip>
  );
};

export default CardMusic;
