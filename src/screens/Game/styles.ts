import { ThemeProvider }  from '@react-navigation/native';

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME }          from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between',
  },

  logo: {
    width: 72,
    height: 40
  },

  right:{
    width:  20,
    height: 20,
  },
  cover:{
    width: 310,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },

  containerList:{
    width: "100%"
  },

  contentList:{
    paddingTop: 16,
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },

  emptyText:{
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR
  },

  emptyList:{

    color: THEME.COLORS.CAPTION_300,
    flex: 1,
    alignItems:'center',
    justyfyContent: 'center',
    marginHorizontal: 40 //alignItems:'center', não ta funcionando...
    
  }
});









