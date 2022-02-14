import CustomEvents from './js/CustomEvents';
import './mbp.scss';


class MBP {


	constructor() {
		this._selectedPage = 'home';
		this._scrollBar = null;
		this.evts = new CustomEvents();
		this._displayConsoleWelcome();
		this._hideFlashingLogo()
			.then(this._buildNav.bind(this))
			.then(this._buildHomepage.bind(this));
	}


	_displayConsoleWelcome() {
		console.log('%cHello, you hacky nerd!', 'font-size:16pt');
		console.log(
			`Do you have some piece of code you want to promote or do you need a hand with it ?\nReach %ccontact@messe-basse-production.com%cso we can find a way to help you!`,
			'text-decoration:underline;color:blue'
		);
	}


	_hideFlashingLogo() {
		return new Promise(resolve => {
			// Set a timeout on logo hiding to let the css text animation to perform (zoom in/out)
			setTimeout(() => {
				document.body.removeChild(document.getElementById('flashing-text-logo'));
				resolve();
			}, /*6000*/6);
		});
	}


	_buildNav() {
		return new Promise(resolve => {			
			// Launch navigation items animation (descending from top screen)
			document.getElementById('navigation').style.opacity = 1;
			setTimeout(() => document.getElementById('link-home').style.animation = 'drop-nav-link 1.8s forwards', 500);
			setTimeout(() => document.getElementById('link-creation').style.animation = 'drop-nav-link 1.7s forwards', 750);
			setTimeout(() => document.getElementById('link-merch').style.animation = 'drop-nav-link 1.6s forwards', 1000);
			setTimeout(() => document.getElementById('link-contact').style.animation = 'drop-nav-link 1.5s forwards', 1250);
			setTimeout(() => document.getElementById('socials').style.opacity = 1, 2250);
			// Subscribe to click events on navigation bar
			document.getElementById('link-home').addEventListener('click', this._buildHomepage.bind(this));
			document.getElementById('link-creation').addEventListener('click', this._buildCreationpage.bind(this));
			document.getElementById('link-merch').addEventListener('click', this._buildMerchpage.bind(this));
			document.getElementById('link-contact').addEventListener('click', this._buildContactpage.bind(this));
			// Resolve (fetch homepage template) after animation is performed
			setTimeout(resolve, 1500);
		});
	}


	/* Pages */


	_buildHomepage() {
		return new Promise(resolve => {
			this._fetchPage('assets/html/home.html', 'home').then(resolve);
		});
	}


	_buildCreationpage() {
		return new Promise(resolve => {
			this._fetchPage('assets/html/creation.html', 'creation').then(() => {
        resolve();
      });
		});
	}


	_buildMerchpage() {
		return new Promise(resolve => {
			this._fetchPage('assets/html/merch.html', 'merch').then(resolve);
		});
	}	


	_buildContactpage() {
		return new Promise(resolve => {
			this._fetchPage('assets/html/contact.html', 'contact').then(() => {
        this.evts.addEvent(
          'click',
          document.getElementById('credit-modal'),
          this._buildCreditModal,
          this
        );
        resolve();
      });
		});
	}	


	/* Modals */


	_buildCreditModal() {
		return new Promise(resolve => {
			this._fetchModal('assets/html/modal/credit.html').then(() => {
				resolve();
			});
		});
	}


	/* Utils */


	_fetchPage(url, className) {
		return new Promise((resolve, reject) => {
			// TODO if (this._scrollBar !== null) { this._scrollBar.destroy(); }
			this.evts.removeAllEvents();
			document.getElementById(`link-${this._selectedPage}`).classList.remove('selected');
			this._selectedPage = className;
			document.getElementById(`link-${this._selectedPage}`).classList.add('selected');
			document.getElementById('scene').style.opacity = 0;
			setTimeout(() => {
				fetch(url)
					.then(data => {
						data.text().then(htmlString => {
							document.getElementById('scene').classList.remove('selected');
							document.getElementById('scene').className = className;
							document.getElementById('scene').innerHTML = '';
							document.getElementById('scene').appendChild(document.createRange().createContextualFragment(htmlString));
							document.getElementById('scene').style.opacity = 1;
							this._scrollBar = new window.ScrollBar({
                target: document.getElementById('scene'),
              });
							setTimeout(resolve, 600);
					})
					.catch(reject);
				})
				.catch(reject);
			}, 600);
		});
	}


	_fetchModal(url) {
		return new Promise((resolve, reject) => {
			const evtIds = [];
			// Close modal inner method
			const closeModal = e => {
				if (['overlay', 'close-modal'].indexOf(e.target.id) === -1) {
					return;
				}

				document.getElementById('overlay').style.opacity = 0;				
				setTimeout(() => {
					document.getElementById('overlay').style.display = 'none';
					document.getElementById('overlay').innerHTML = '';
					for (let i = 0; i < evtIds.length; ++i) {
						this.evts.removeEvent(evtIds[i]);
					}
				}, 600);
			};
			// Display modal when needed
			const displayModal = () => {
				document.getElementById('modal').style.opacity = 1;
				evtIds.push(this.evts.addEvent('click', document.getElementById('overlay'), closeModal, this));
				evtIds.push(this.evts.addEvent('click', document.getElementById('close-modal'), closeModal, this));
				setTimeout(resolve, 600); // CSS animation time
			};

			document.getElementById('overlay').style.display = 'flex';
			setTimeout(() => {
				document.getElementById('overlay').style.opacity = 1;
				setTimeout(() => {
					fetch(url)
						.then(data => {
							data.text().then(htmlString => {
								document.getElementById('overlay').appendChild(document.createRange().createContextualFragment(htmlString));
								setTimeout(displayModal.bind(this), 50);
						})
						.catch(reject);
					})
					.catch(reject);
				}, 50);
			}, 50);
		});		
	}


}


export default MBP;
