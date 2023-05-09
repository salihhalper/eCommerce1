import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import style from '../styles/footerStyle';

import {Facebook, Instagram, Twitter} from '../assets/icons';

const SocialMedia = () => {
  return (
    <View style={style.socialMedia}>
      <Text style={style.socialMediaTitle}>Bandage</Text>
      <View style={style.socialMediaIcons}>
        <Facebook />
        <Instagram />
        <Twitter />
      </View>
    </View>
  );
};
const Pages = () => {
  const pages = [
    {
      pagesItemTitle: 'Company Info',
      itemPages: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
    },
    {
      pagesItemTitle: 'Legale',
      itemPages: ['test1', 'test2', 'test3', 'test5'],
    },
    {
      pagesItemTitle: 'Features',
      itemPages: ['test4', 'test6'],
    },
    {
      pagesItemTitle: 'Home',
      itemPages: ['test-1', 'test-2'],
    },
  ];

  const PagesItem = ({pagesItemTitle, itemPages}) => {
    console.log(itemPages);
    return (
      <View style={style.pagesItem}>
        <Text style={style.pagesItemTitle}>{pagesItemTitle}</Text>
        <View style={style.itemPages}>
          {itemPages.map((itemPage, index) => (
            <Text key={index} style={style.itemPagesTitle}>
              {itemPage}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={style.pages}>
      {pages.map((page, index) => (
        <PagesItem
          key={index}
          pagesItemTitle={page.pagesItemTitle}
          itemPages={page.itemPages}
        />
      ))}
    </View>
  );
};
const Subscribe = () => {
  return (
    <View style={style.subscribe}>
      <Text style={style.subscribeTitle}>Get In Touch</Text>
      <View style={style.sendEmail}>
        <TextInput style={style.subscribeInput} placeholder="Your Email" />
        <TouchableOpacity style={style.subscribeButton}>
          <Text style={style.buttonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
      <Text style={style.subscribeDescription}>Lorem ipsum dolor Amit</Text>
    </View>
  );
};
const Info = () => {
  return (
    <View style={style.info}>
      <Text style={style.infoText}>Made With Love By</Text>
      <Text style={style.infoText}>Finland All Right Reserved</Text>
    </View>
  );
};
const Footer = () => {
  return (
    <View>
      <View style={style.footer}>
        <SocialMedia />
        <Pages />
        <Subscribe />
      </View>
      <Info />
    </View>
  );
};
export default Footer;
