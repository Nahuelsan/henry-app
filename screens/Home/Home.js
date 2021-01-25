import React, { useEffect, useState } from 'react';
import { BackGround, Img, Title, InfoBot, TitleMin, SpanText } from './styledHome';
let logoPath = require('../../src/assets/img/henry_logo.jpg');

const Home = ({ navigation }) => {
	return (
		<BackGround>
			<Img style={{ height: 100, width: 150 }} source={logoPath} />
			<Title>HENRY WORLD</Title>
			<TitleMin>Tu mejor futuro</TitleMin>
			<InfoBot>
				Ya tienes cuenta?
				<SpanText onPress={() => navigation.navigate('Iniciar Sesion')}> Inicia Sesion </SpanText>
			</InfoBot>
			<InfoBot>
				{' '}
				Soy usuario nuevo
				<SpanText onPress={() => navigation.navigate('Formulario Datos')}> Registro </SpanText>
			</InfoBot>
		</BackGround>
	);
};

export default Home;
