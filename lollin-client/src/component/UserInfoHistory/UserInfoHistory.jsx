import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './UserInfoHistoryStyled.jsx';
import Tier from './Tier/Tier.jsx';
import History from './History/History.jsx';

const server = process.env.REACT_APP_SERVER_URL;
const UserInfoHistory = ({ summonerName, defaultPlayer }) => {
	const [historyData, setHistoryData] = useState(null);
	const [summonerResult, setSummonerResult] = useState(summonerName);
	const [isLoading, setIsLoading] = useState(null);
	const [searchVal, setSearchVal] = useState('');

	const handleInputVal = (e) => {
		setSearchVal(e.target.value);
		console.log('SearchVal', searchVal);
		if (e.key === 'Enter') {
			handleSearchName();
			console.log('SearchVal', searchVal);
		}
	};

	const handleSearchName = () => {
		setSummonerResult(searchVal);
		setIsLoading(true);

		axios
			.get(`${server}/utils/history?name=${searchVal}`)
			.then((res) => {
				if (res.data.message) {
					setHistoryData(null);
					setIsLoading(null);
				} else {
					setHistoryData(res.data);
					setIsLoading(false);
				}

				console.log('통신완료', res);
			})
			.catch((err) => {
				setHistoryData(null);
				setIsLoading(null);
				console.log('에러뿜뿜');
			});
		setSearchVal('');
	};

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`${server}/utils/history?name=${summonerName}`)
			.then((res) => {
				setHistoryData(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				setHistoryData(null);
				setIsLoading(null);
			});
	}, [summonerName]);

	useEffect(() => {
		if (defaultPlayer !== null) {
			setSummonerResult(defaultPlayer.summonerName);
			setIsLoading(true);
			axios
				.get(`${server}/utils/history?name=${defaultPlayer.summonerName}`)
				.then((res) => {
					setHistoryData(res.data);
					setIsLoading(false);
				})
				.catch((err) => {
					setIsLoading(null);
				});
		}
		console.log('defaultPlayer : ', defaultPlayer);
	}, [defaultPlayer]);
	return (
		<Container>
			<section className="entireWrap">
				<div className="topWrap">
					<div className="name">{summonerResult}</div>

					<section className="searchArea">
						<input
							type="text"
							className="searchInput"
							placeholder="소환사 검색.."
							onChange={handleInputVal}
							onKeyPress={handleInputVal}
							value={searchVal}
						/>
						<button className="searchBtn" onClick={handleSearchName}>
							Lollin{' '}
						</button>
					</section>
				</div>

				<section className="tierWrapper">
					<Tier historyData={historyData}></Tier>
				</section>

				<section>
					<History historyData={historyData} isLoading={isLoading}></History>
				</section>
			</section>
		</Container>
	);
};

export default UserInfoHistory;
