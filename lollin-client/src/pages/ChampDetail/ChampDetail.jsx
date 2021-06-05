import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { initData } from './ChampInitData.jsx';
import {
	ChampDetailArea,
	BackImg,
	RenderArea,
	Wrap,
	SkillsArea,
	ChampDetailImg,
	ChampSkillWeb,
	ChampName,
	CahmpDetailName,
	ChampDescText,
	ChampDescName,
	ChampAllytips,
	ChampEnemytips,
	ChampTipsArea,
	ChampRecommendedBuild,
} from './ChampDetailStyled.jsx';
const cheerio = require('cheerio');
const server = process.env.REACT_APP_SERVER_URL;

const ChampDetail = ({ champPriId }) => {
	const location = useLocation();
	const [champData, setChampData] = useState(initData);
	const [skillIndex, setSkillIndex] = useState(0);
	const [resultId, setResultId] = useState('Aatrox');
	const [oppName, setOppName] = useState('');
	const [runeEls, setRuneEls] = useState([]);
	const [runeUrls, setRuneUrls] = useState([]);
	const [isLoading, setIsLoading] = useState(null);
	console.log(resultId);

	const handleSkillIndex = (index) => {
		setSkillIndex(index);
	};

	useEffect(() => {
		const handleResultId = () => {
			if (location.state !== undefined) {
				return setResultId(location.state.id);
			} else {
				return setResultId(champPriId);
			}
		};
		handleResultId();

		axios
			.get(`${server}/champions/detail?id=${encodeURI(resultId)}`)
			.then((res) => {
				setChampData(res.data.data);
			});
	}, [resultId]);
	const handleOppSearch = () => {
		setIsLoading(true);
		axios
			.get(
				`${process.env.REACT_APP_SERVER_URL}/recommend/build?champ1=${resultId}&champ2=${oppName}`,
			)
			.then((response) => {
				const $ = cheerio.load(response.data);
				// let runeEl = $(
				// 	'div.rune > div.main > div.keystone > span.rune-imgbox.active > div',
				// );
				let runeEls = $(' span.rune-imgbox.active > div');
				let urls = [];
				for (let runeEl of runeEls) {
					console.log(runeEl);
				}
				setRuneEls(runeEls);
				// for (let runeEl of runeEls) {
				// 	let runeClass = runeEl.attribs.class;
				// 	let runeId = runeClass.split(' ')[1].split('_')[2];
				// 	console.log(a);
				// 	axios
				// 		.get(`${process.env.REACT_APP_SERVER_URL}/rune?id=${runeId}`)
				// 		.then((resJson) => {
				// 			let url = resJson.data.icon;
				// 			// console.log('url: ', url);
				// 			urls.push(url);
				// 			console.log(b);
				// 		})
				// 		.catch((err) => {
				// 			console.log(err);
				// 		});
				// }
				// console.log(c);
				// setRuneUrls(urls);
				// setIsLoading(false);

				//"background-image: url(https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Precision/Conqueror/Conqueror.png); background-size: 80px 80px; width: 80px; height: 80px;"

				// console.log('runeId: ');
				// console.log(runeId);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	};
	useEffect(async () => {
		let urls = [];
		for (let runeEl of runeEls) {
			let runeClass = runeEl.attribs.class;
			let runeId = runeClass.split(' ')[1].split('_')[2];
			await axios
				.get(`${process.env.REACT_APP_SERVER_URL}/rune?id=${runeId}`)
				.then((resJson) => {
					let url = resJson.data.icon;
					// console.log('url: ', url);
					urls.push(url);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		setRuneUrls(urls);
		setIsLoading(false);
	}, [runeEls]);
	//#root > div > div.sc-lmgQwP.egcscq.champDetail > section > div > div.sc-ciSkZP.dQMkGr > div.sc-iTVJFM.dCQnwK > div > div.rune > div.main > div.keystone > span.rune-imgbox.active
	//#root > div > div.sc-lmgQwP.egcscq.champDetail > section > div > div.sc-ciSkZP.dQMkGr > div.sc-iTVJFM.dCQnwK > div > div.rune > div.main > div.keystone > span.rune-imgbox.active > div
	const handleSkillsDescription = () => {
		return (
			<div
				dangerouslySetInnerHTML={{
					__html: champData.skills[skillIndex].description,
				}}
			></div>
		);
	};

	return (
		<ChampDetailArea className="champDetail">
			<BackImg
				className="champDbBackImg"
				src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champPriId}_0.jpg`}
			/>
			<Wrap>
				<RenderArea className="renderWrapper">
					<ChampName className="champDetailNameArea">
						<ChampDetailImg className="champDetailImg" src={champData.img} />
						<CahmpDetailName className="cahmpDetailName">
							{resultId}
						</CahmpDetailName>
					</ChampName>

					<SkillsArea className="champDetailSkills">
						<section>
							<div className="detailSkill">
								{champData.skillsimg.map((ele, index) => (
									<div className="detailSkills" key={index}>
										<img
											className="detailSkillsImg"
											src={ele}
											alt={champData.skills[index]}
											key={champData.skills[index]}
											onClick={() => {
												handleSkillIndex(index);
											}}
										></img>
									</div>
								))}
							</div>
							<div className="detailDesc">
								<ChampDescName>
									{champData.skills[skillIndex].name}
								</ChampDescName>
								<br></br>
								<ChampDescText className="detailDescEffect">
									{handleSkillsDescription()}
								</ChampDescText>
							</div>
						</section>

						{champData.skillwebm.map((ele, idx) => (
							<ChampSkillWeb
								className={idx === skillIndex ? 'isDisplay' : 'noDisplay'}
								src={ele}
								width="480px"
								muted
								autoPlay
								loop
							></ChampSkillWeb>
						))}
						{/* <ChampSkillWeb
              className="champDetailWebm"
              src={champData.skillwebm[skillIndex]}
              width="480px"
              }}></button>
              muted
              autoPlay
              loop
            ></ChampSkillWeb> */}
					</SkillsArea>
					<ChampTipsArea>
						챔피언 플레이 팁!
						<ChampAllytips>
							<br></br>
							{champData.allytips.map((ele, index) => (
								<div>
									{' '}
									tip{index + 1} : {ele}{' '}
								</div>
							))}
						</ChampAllytips>
						<br></br>
						챔피언 상대 팁!
						<ChampEnemytips>
							<br></br>
							{champData.enemytips.map((ele, index) => (
								<div>
									tip{index + 1} : {ele}
								</div>
							))}
						</ChampEnemytips>
						<ChampRecommendedBuild>
							<input
								type="text"
								onChange={(e) => {
									setOppName(e.target.value);
								}}
							></input>
							<button
								onClick={() => {
									handleOppSearch();
								}}
							>
								Search!
							</button>
							{/* {runeUrls.map((el, idx, urls) => {
								// console.log(runeEl);
								// console.log(runeEls[runeEl]);
								console.log('inside map');
								console.log('el: ', el);
								console.log('idx: ', idx);
								console.log('urls: ', urls);
								console.log('runeUrls', runeUrls);
								return (
									<div
										{...runeEls[idx].attribs}
										style={{
											backgroundImage: `url(${urls[0]})`,
											backgroundSize: '80px 80px',
											width: '200px',
											height: '200px',
										}}
									></div>
								);
							})} */}
							{isLoading
								? 'Loading...'
								: runeUrls.map((el, idx, urls) => {
										// console.log(runeEl);
										// console.log(runeEls[runeEl]);
										console.log('inside map');
										console.log('runeUrls: ', runeUrls);
										console.log('runeEls: ', runeEls);
										console.log('el: ', el);
										console.log('idx: ', idx);
										console.log('urls: ', urls);
										return (
											<div
												{...runeEls[idx].attribs}
												style={{
													backgroundImage: `url(${el})`,
													backgroundSize: '80px 80px',
													width: '200px',
													height: '200px',
												}}
											></div>
										);
								  })}
						</ChampRecommendedBuild>
					</ChampTipsArea>
				</RenderArea>
			</Wrap>
		</ChampDetailArea>
	);
};

export default ChampDetail;
