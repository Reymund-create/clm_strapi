import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_background_images';
  info: {
    displayName: 'backgroundImage';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['link']>;
  };
}

export interface ElementsCardItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_items';
  info: {
    displayName: 'Card';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    position: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCardV2 extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_v2s';
  info: {
    displayName: 'Card V2';
  };
  attributes: {
    Desctription: Schema.Attribute.Blocks;
    Icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    Title: Schema.Attribute.String;
  };
}

export interface ElementsContactButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_contact_buttons';
  info: {
    displayName: 'contactButton';
  };
  attributes: {
    label: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
  };
}

export interface ElementsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_items';
  info: {
    displayName: 'accordion';
    icon: 'lightbulb';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    isAccordion: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    displayName: 'feature-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHeading extends Struct.ComponentSchema {
  collectionName: 'components_elements_headings';
  info: {
    displayName: 'heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface ElementsIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'icon';
  };
  attributes: {
    height: Schema.Attribute.String;
    iconData: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-plugin-iconhub.iconhub',
        {
          storeIconData: true;
          storeIconName: true;
        }
      >;
    width: Schema.Attribute.String;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    singleImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ElementsMetric extends Struct.ComponentSchema {
  collectionName: 'components_elements_metrics';
  info: {
    displayName: 'Metric';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ElementsMultipleImages extends Struct.ComponentSchema {
  collectionName: 'components_elements_multiple_images';
  info: {
    displayName: 'multipleImages';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ElementsRichText extends Struct.ComponentSchema {
  collectionName: 'components_elements_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    richText: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.background-image': ElementsBackgroundImage;
      'elements.button': ElementsButton;
      'elements.card-item': ElementsCardItem;
      'elements.card-v2': ElementsCardV2;
      'elements.contact-button': ElementsContactButton;
      'elements.faq-item': ElementsFaqItem;
      'elements.feature-item': ElementsFeatureItem;
      'elements.heading': ElementsHeading;
      'elements.icon': ElementsIcon;
      'elements.image': ElementsImage;
      'elements.metric': ElementsMetric;
      'elements.multiple-images': ElementsMultipleImages;
      'elements.rich-text': ElementsRichText;
    }
  }
}
