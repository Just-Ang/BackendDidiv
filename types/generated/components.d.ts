import type { Schema, Struct } from '@strapi/strapi';

export interface BikesBikes extends Struct.ComponentSchema {
  collectionName: 'components_bikes_bikes';
  info: {
    displayName: 'Bikes';
  };
  attributes: {
    material: Schema.Attribute.String;
    size: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface FramesFrames extends Struct.ComponentSchema {
  collectionName: 'components_frames_frames';
  info: {
    displayName: 'Frames';
  };
  attributes: {
    material: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bikes.bikes': BikesBikes;
      'frames.frames': FramesFrames;
    }
  }
}
