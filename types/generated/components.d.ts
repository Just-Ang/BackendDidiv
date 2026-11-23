import type { Schema, Struct } from '@strapi/strapi';

export interface ProductSpecsAttribute extends Struct.ComponentSchema {
  collectionName: 'components_product_specs_attributes';
  info: {
    displayName: 'attribute';
  };
  attributes: {
    label: Schema.Attribute.Relation<
      'oneToOne',
      'api::attribute-label.attribute-label'
    >;
    value: Schema.Attribute.Relation<
      'oneToOne',
      'api::attribute-value.attribute-value'
    >;
  };
}

export interface ProductSpecsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_product_specs_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product-specs.attribute': ProductSpecsAttribute;
      'product-specs.features': ProductSpecsFeatures;
    }
  }
}
