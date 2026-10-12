<script>
	import coverTexture from '$lib/assets/parent-teacher/cover.png';
	import programmerPhoto from '$lib/assets/parent-teacher/programmer-at-work.jpg';
	import programmerCodingPhoto from '$lib/assets/parent-teacher/programmer-coding.jpg';
	import airportPhoto from '$lib/assets/parent-teacher/soekarno-hatta.jpg';
	import meetingPhoto from '$lib/assets/parent-teacher/team-meeting.jpg';
	import rocketIcon from '$lib/assets/parent-teacher/rocket.png';
</script>

<svelte:head>
	<title>Mengenal Profesi Software Programmer</title>
	<meta
		name="description"
		content="Pengenalan profesi software programmer, keterampilan, pendidikan, dan aktivitas logika koding."
	/>
</svelte:head>

<div class="slides font-sans text-left text-[#172033]">
	<section
		class="slide cover relative flex flex-col justify-center overflow-hidden bg-[#141735] bg-cover bg-center px-[110px] py-[70px] text-[#f8f8ff] max-[900px]:px-[58px] max-[900px]:py-[58px]"
		style={`background-image: url("${coverTexture}")`}
	>
		<div class="relative z-[1] max-w-[880px]">
			<!-- <p class="!mb-5 text-[14px] font-bold tracking-[0.14em] text-[#aaa9ff]">
				MENGENAL DUNIA TEKNOLOGI
			</p> -->
			<h1
				class="m-0 max-w-[830px] !text-[67px] !leading-[1.17] !font-bold !tracking-[-0.045em] !text-[#f7f7fc] max-[900px]:!text-[52px]"
			>
				Mengenal Profesi <span class="text-[#8f8aff]">Software Programmer</span>
			</h1>
			<p class="!mt-5 max-w-[770px] text-[21px] leading-[1.55] text-[#bfc1d2]">
				<!-- Bagaimana kode komputer menjadi solusi digital yang membantu jutaan orang setiap hari. -->
			</p>
			<div class="mt-9 h-0.5 w-[690px] max-w-[70%] bg-white/70"></div>
		</div>
	</section>

	<section class="slide programmer-intro bg-[#f4f5ff] text-left">
		<div
			class="grid h-full min-h-0 grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] items-center gap-14 max-[900px]:gap-8 max-[700px]:grid-cols-1 max-[700px]:grid-rows-[230px_auto] max-[700px]:gap-5"
		>
			<figure
				class="relative m-0 h-full min-h-0 overflow-hidden rounded-[30px] bg-[#141735] shadow-[0_28px_70px_rgba(26,31,72,0.2)] max-[700px]:rounded-[22px]"
			>
				<img
					class="h-full w-full object-cover object-center"
					src={programmerCodingPhoto}
					alt="Laptop displaying source code on a developer's desk"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#101426]/85 via-[#101426]/10 to-[#101426]/5"></div>
				<figcaption
					class="absolute right-0 bottom-0 left-0 flex items-end justify-between gap-4 p-7 text-white max-[700px]:p-4"
				>
					<div>
						<p class="!mb-2 text-[12px] font-bold tracking-[0.16em] text-[#c5c5ff]">IDE → KODE → SOLUSI</p>
						<p class="!text-[21px] !font-semibold !text-white">Membangun dunia digital</p>
					</div>
					<!-- <span class="shrink-0 text-[12px] text-white/70">Foto: Unsplash</span> -->
				</figcaption>
			</figure>

			<div class="flex min-w-0 flex-col justify-center py-5 max-[900px]:py-0">
				<p
					class="mb-5 w-fit rounded-full border border-[#dedfff] bg-white/80 px-4 py-2 text-[13px] font-bold tracking-[0.08em] text-[#5144d8] shadow-sm"
				>
					MENGENAL PROFESINYA
				</p>
				<h2
					class="m-0 !text-[54px] !leading-[1.08] !font-bold !tracking-[-0.045em] !text-[#172033] max-[900px]:!text-[38px] max-[700px]:!text-[34px]"
				>
					Apa yang dilakukan seorang <span class="text-[#5d50e6]">Programmer?</span>
				</h2>
				<p class="programmer-summary !mt-5 max-w-[640px] !text-[25px] !leading-[1.45] !text-[#596176] max-[900px]:!mt-3 max-[900px]:!text-[19px] max-[700px]:!mt-2">
					Menulis, menguji, dan memelihara kode program (Source Code) agar Aplikasi, Program Komputer, dan Sistem Operasi dapat berjalan dengan baik.
				</p>

				<div class="programmer-responsibilities mt-6 max-[900px]:mt-3 max-[700px]:mt-2">
					<h3 class="programmer-responsibilities-heading !mb-3 !text-[32px] !leading-tight !font-extrabold tracking-[0.12em] text-[#5144d8] max-[900px]:!mb-2">
						Tugas dan Tanggung Jawab
					</h3>
					<ul class="programmer-responsibility-list m-0 flex list-none flex-col gap-3 p-0 max-[900px]:gap-2 max-[700px]:gap-1">
						<li class="programmer-responsibility flex items-start gap-3 text-[24px] leading-[1.35] text-[#414a60] max-[900px]:text-[22px] max-[700px]:text-[14px]">
							<span class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e8e7ff] font-bold text-[#5144d8]">1</span>
							<span>Menulis kode program untuk membuat Aplikasi, Program Komputer, atau Sistem Operasi.</span>
						</li>
						<li class="programmer-responsibility flex items-start gap-3 text-[24px] leading-[1.35] text-[#414a60] max-[900px]:text-[22px] max-[700px]:text-[14px]">
							<span class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e8e7ff] font-bold text-[#5144d8]">2</span>
							<span>Menguji program, menemukan "Bugs", dan memperbaikinya.</span>
						</li>
						<li class="programmer-responsibility flex items-start gap-3 text-[24px] leading-[1.35] text-[#414a60] max-[900px]:text-[22px] max-[700px]:text-[14px]">
							<span class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e8e7ff] font-bold text-[#5144d8]">3</span>
							<span>Memelihara (maintain) dan terus menerus memperbarui kode program (Source Code) yang sudah ada.</span>
						</li>
						<li class="programmer-responsibility flex items-start gap-3 text-[24px] leading-[1.35] text-[#414a60] max-[900px]:text-[22px] max-[700px]:text-[14px]">
							<span class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e8e7ff] font-bold text-[#5144d8]">4</span>
							<span>Berkolaborasi dengan pihak terkait: Desainer, Project Manager, Pengguna.</span>
						</li>
						<li class="programmer-responsibility flex items-start gap-3 text-[24px] leading-[1.35] text-[#414a60] max-[900px]:text-[22px] max-[700px]:text-[14px]">
							<span class="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e8e7ff] font-bold text-[#5144d8]">5</span>
							<span>Membuat dokumentasi untuk program yang dikembangkan.</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section class="slide motivation-slide flex flex-col gap-8 bg-[#f5f6ff] text-left max-[900px]:gap-5">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-extrabold tracking-[0.12em] text-[#5144d8]">LATAR BELAKANG PROFESI</p>
			<h2
				class="m-0 !text-[44px] !leading-[1.08] !font-bold !tracking-[-0.04em] !text-[#172033] max-[900px]:!text-[36px]"
			>
				Mengapa Programmer dibutuhkan?
			</h2>
		</header>
		<div
			class="grid min-h-0 flex-1 grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] items-center gap-8 max-[900px]:gap-5 max-[650px]:grid-cols-1 max-[650px]:gap-3"
		>
			<figure
				class="relative m-0 h-full max-h-[480px] overflow-hidden rounded-[26px] border border-white/70 bg-white shadow-[0_20px_50px_rgba(29,38,69,0.16)]"
			>
				<img
					class="h-full w-full object-cover object-[center_42%]"
					src={programmerPhoto}
					alt="POS (Point Of Sales) system on a laptop screen with a programmer working in the background"
				/>
				<figcaption
					class="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/85 to-transparent px-7 pt-20 pb-7 text-[22px] font-bold text-white"
				>
					Kode program di sekitar kita.
				</figcaption>
			</figure>
			<div class="flex min-h-0 flex-col gap-3">
				<article class="flex min-h-0 items-start gap-4 overflow-hidden rounded-[22px] border border-[#e8e8f5] bg-white p-4 shadow-[0_12px_30px_rgba(42,45,91,0.06)]">
					<span
						class="inline-flex size-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#eeedff] text-[23px] font-extrabold text-[#5d50e6]"
						>▣</span
					>
					<div>
						<h3 class="m-0 !text-[23px] !leading-tight !font-bold !text-[#172033]">Kehidupan serba Digital</h3>
						<p class="!mt-2 text-[18px] leading-[1.35] text-[#697184]">
							Kebutuhan akan Aplikasi dan Layanan Digital dalam banyak aspek kehidupan sehari-hari.
						</p>
					</div>
				</article>
				<article class="flex min-h-0 items-start gap-4 overflow-hidden rounded-[22px] border border-[#e1edf5] bg-white p-4 shadow-[0_12px_30px_rgba(42,45,91,0.06)]">
					<span
						class="inline-flex size-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#e5f5fc] text-[23px] font-extrabold text-[#078abb]"
						>⌘</span
					>
					<div>
						<h3 class="m-0 !text-[23px] !leading-tight !font-bold !text-[#172033]">Otomatisasi Perusahaan</h3>
						<p class="!mt-2 text-[18px] leading-[1.35] text-[#697184]">
							Perusahaan membutuhkan otomatisasi agar seluruh proses terhubung, pekerjaan menjadi lebih cepat dan akurat.
						</p>
					</div>
				</article>
				<article class="flex min-h-0 items-start gap-4 overflow-hidden rounded-[22px] border border-[#e0efe6] bg-white p-4 shadow-[0_12px_30px_rgba(42,45,91,0.06)]">
					<span
						class="inline-flex size-[48px] shrink-0 items-center justify-center rounded-[14px] bg-[#e7f8ed] text-[23px] font-extrabold text-[#159c63]"
						>✓</span
					>
					<div>
						<h3 class="m-0 !text-[23px] !leading-tight !font-bold !text-[#172033]">Solusi untuk banyak permasalahan nyata</h3>
						<p class="!mt-2 text-[18px] leading-[1.35] text-[#697184]">
							Solusi digital untuk masalah nyata harus berkembang, karena permasalahan nyata juga terus berkembang.
						</p>
					</div>
				</article>
			</div>
		</div>
	</section>

	<section class="slide programmer-types bg-[#f5f6ff] text-left">
		<header class="mb-6 flex shrink-0 items-center justify-between gap-8 max-[700px]:mb-4">
			<div>
				<p class="!mb-3 text-[14px] font-extrabold tracking-[0.12em] text-[#5144d8]">
					JENIS PROGRAMMER
				</p>
				<h2
					class="m-0 !text-[48px] !leading-[1.08] !font-bold !tracking-[-0.04em] !text-[#172033] max-[900px]:!text-[40px] max-[700px]:!text-[32px]"
				>
					Luasnya dunia programmer: contoh spesialisasi Programmer
				</h2>
			</div>
			<!-- <div
				class="flex h-[100px] w-[245px] shrink-0 items-center gap-4 rounded-[20px] bg-[#202747] px-5 text-white shadow-[0_12px_30px_rgba(29,38,69,0.14)] max-[700px]:hidden"
				aria-hidden="true"
			>
				<span class="font-mono text-[32px] font-bold tracking-[-0.12em] text-[#a9a2ff]">&lt;/&gt;</span>
				<div class="border-l border-white/20 pl-4">
					<p class="!mb-1 text-[11px] font-bold tracking-[0.16em] text-[#c2bdff]">BUILD THE FUTURE</p>
					<p class="text-[14px] font-semibold text-white/90">WEB · APP · SYSTEMS</p>
				</div>
			</div> -->
		</header>

		<div class="grid min-h-0 flex-1 grid-cols-6 grid-rows-2 gap-5 max-[900px]:gap-3 max-[650px]:grid-cols-1 max-[650px]:grid-rows-5">
			<article
				class="col-span-2 flex min-h-0 flex-col justify-between rounded-[22px] border border-[#e2defe] border-t-[5px] border-t-[#6255ed] bg-white p-7 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-5 max-[650px]:col-span-1"
			>
				<div>
					<span class="mb-4 inline-block text-[14px] font-extrabold tracking-[0.14em] text-[#7568e9]">01 / WEB</span>
					<h3 class="m-0 !text-[36px] !leading-[1.1] !font-bold !tracking-[-0.03em] !text-[#172033] max-[900px]:!text-[28px]">
						Fullstack Web Developer
					</h3>
					<p class="!mt-3 text-[18px] font-semibold text-[#5d50e6] max-[900px]:!text-[16px]">
						Front End &amp; Back End Web
					</p>
				</div>
				<p class="!mt-4 text-[22px] leading-[1.38] text-[#626b7e] max-[900px]:!text-[18px]">
					Merancang halaman Web untuk Pengguna, sekaligus mengelola Database dan Server.
				</p>
			</article>

			<article
				class="col-span-2 flex min-h-0 flex-col justify-between rounded-[22px] border border-[#d8edf6] border-t-[5px] border-t-[#078abb] bg-white p-7 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-5 max-[650px]:col-span-1"
			>
				<div>
					<span class="mb-4 inline-block text-[14px] font-extrabold tracking-[0.14em] text-[#078abb]">02 / MOBILE</span>
					<h3 class="m-0 !text-[36px] !leading-[1.1] !font-bold !tracking-[-0.03em] !text-[#172033] max-[900px]:!text-[28px]">
						Mobile App Developer
					</h3>
					<p class="!mt-3 text-[18px] font-semibold text-[#078abb] max-[900px]:!text-[16px]">
						Aplikasi mobile: Android, iOS ....
					</p>
				</div>
				<p class="!mt-4 text-[22px] leading-[1.38] text-[#626b7e] max-[900px]:!text-[18px]">
					Membuat aplikasi telepon seluler untuk berbagai kebutuhan, mulai dari hiburan hingga produktivitas.
				</p>
			</article>

			<article
				class="col-span-2 flex min-h-0 flex-col justify-between rounded-[22px] border border-[#eadffc] border-t-[5px] border-t-[#8846eb] bg-white p-7 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-5 max-[650px]:col-span-1"
			>
				<div>
					<span class="mb-4 inline-block text-[14px] font-extrabold tracking-[0.14em] text-[#8042de]">03 / GAME</span>
					<h3 class="m-0 !text-[36px] !leading-[1.1] !font-bold !tracking-[-0.03em] !text-[#172033] max-[900px]:!text-[28px]">
						Game Developer
					</h3>
					<p class="!mt-3 text-[18px] font-semibold text-[#8042de] max-[900px]:!text-[16px]">
						Permainan &amp; grafis interaktif
					</p>
				</div>
				<p class="!mt-4 text-[22px] leading-[1.38] text-[#626b7e] max-[900px]:!text-[18px]">
					Merancang logika, fisika karakter, dan alur agar game seru dimainkan.
				</p>
			</article>

			<article
				class="col-span-3 flex min-h-0 flex-col justify-between rounded-[22px] border border-[#d9eee8] border-t-[5px] border-t-[#159b85] bg-white p-7 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-5 max-[650px]:col-span-1"
			>
				<div>
					<span class="mb-4 inline-block text-[14px] font-extrabold tracking-[0.14em] text-[#159b85]">04 / ENTERPRISE</span>
					<h3 class="m-0 !text-[36px] !leading-[1.1] !font-bold !tracking-[-0.03em] !text-[#172033] max-[900px]:!text-[28px]">
						Enterprise Developer
					</h3>
					<p class="!mt-3 text-[18px] font-semibold text-[#159b85] max-[900px]:!text-[16px]">
						ERP: Enterprise Resource Planning
					</p>
				</div>
				<p class="!mt-4 text-[22px] leading-[1.38] text-[#626b7e] max-[900px]:!text-[18px]">
					Membangun program untuk mengelola keuangan, jaringan suplai, dan operasional perusahaan.
				</p>
			</article>

			<article
				class="col-span-3 flex min-h-0 flex-col justify-between rounded-[22px] border border-[#d8edf6] border-t-[5px] border-t-[#078abb] bg-white p-7 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-5 max-[650px]:col-span-1"
			>
				<div>
					<span class="mb-4 inline-block text-[14px] font-extrabold tracking-[0.14em] text-[#078abb]">05 / INTEGRASI</span>
					<h3 class="m-0 !text-[36px] !leading-[1.1] !font-bold !tracking-[-0.03em] !text-[#172033] max-[900px]:!text-[28px]">
						System Integration Specialist
					</h3>
					<p class="!mt-3 text-[18px] font-semibold text-[#078abb] max-[900px]:!text-[16px]">
						Menghubungkan berbagai sistem
					</p>
				</div>
				<p class="!mt-4 text-[22px] leading-[1.38] text-[#626b7e] max-[900px]:!text-[18px]">
					Menyatukan sistem dan aplikasi agar dapat bertukar data secara efisien dan aman.
				</p>
			</article>
		</div>
	</section>

	<section class="slide skill-slide flex flex-col gap-8 bg-[#f5f6ff] text-left max-[900px]:gap-5">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-extrabold tracking-[0.12em] text-[#5144d8]">KETERAMPILAN UTAMA</p>
			<h2
				class="m-0 !text-[48px] !leading-[1.08] !font-bold !tracking-[-0.04em] !text-[#172033] max-[900px]:!text-[38px]"
			>
				Skill apa saja yang dibutuhkan?
			</h2>
		</header>
		<div class="grid h-[340px] flex-none grid-cols-2 grid-rows-2 items-stretch gap-5 max-[900px]:gap-3">
			<article
				class="flex min-h-0 items-center gap-6 rounded-[24px] border border-[#e2defe] border-l-[5px] border-l-[#6255ed] bg-white p-6 text-left shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:gap-4 max-[900px]:p-4"
			>
				<span
					class="inline-flex size-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#e9e8ff] text-[30px] font-extrabold text-[#584bd6]"
					>◉</span
				>
				<div>
					<h3 class="m-0 !text-[26px] !leading-[1.12] !font-bold !text-[#172033]">
						Logika pemecahan masalah
					</h3>
					<p class="!mt-3 text-[19px] leading-[1.35] text-[#626b7e]">
						Berpikir runtut dan sistematis untuk menyelesaikan masalah langkah demi langkah.
					</p>
				</div>
			</article>
			<article
				class="flex min-h-0 items-center gap-6 rounded-[24px] border border-[#d8edf6] border-l-[5px] border-l-[#078abb] bg-white p-6 text-left shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:gap-4 max-[900px]:p-4"
			>
				<span
					class="inline-flex size-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#e1f4fb] text-[30px] font-extrabold text-[#048bb9]"
					>&lt;/&gt;</span
				>
				<div>
					<h3 class="m-0 !text-[26px] !leading-[1.12] !font-bold !text-[#172033]">Bahasa Pemrograman</h3>
					<p class="!mt-3 text-[19px] leading-[1.35] text-[#626b7e]">
						Menguasai bahasa pemrograman: Python, JavaScript, Java, ABAP, Rust, Golang ....
					</p>
				</div>
			</article>
			<article
				class="flex min-h-0 items-center gap-6 rounded-[24px] border border-[#f3e4c1] border-l-[5px] border-l-[#c18a27] bg-white p-6 text-left shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:gap-4 max-[900px]:p-4"
			>
				<span
					class="inline-flex size-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#fff5d8] text-[30px] font-extrabold text-[#b67b15]"
					>♟</span
				>
				<div>
					<h3 class="m-0 !text-[26px] !leading-[1.12] !font-bold !text-[#172033]">Kerja Sama Tim</h3>
					<p class="!mt-3 text-[19px] leading-[1.35] text-[#626b7e]">
						Berkolaborasi dengan anggota tim: Desainer, Project Manager, dan Pengguna.
					</p>
				</div>
			</article>
			<article
				class="flex min-h-0 items-center gap-6 rounded-[24px] border border-[#d9eee8] border-l-[5px] border-l-[#159b85] bg-white p-6 text-left shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:gap-4 max-[900px]:p-4"
			>
				<span
					class="inline-flex size-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#e1f7ea] text-[30px] font-extrabold text-[#19995e]"
					>文</span
				>
				<div>
					<h3 class="m-0 !text-[26px] !leading-[1.12] !font-bold !text-[#172033]">Bahasa Inggris</h3>
					<p class="!mt-3 text-[19px] leading-[1.35] text-[#626b7e]">
						Membaca dokumentasi teknis, terhubung dengan ruang diskusi komunitas global.
					</p>
				</div>
			</article>
		</div>
	</section>

	<section class="slide education-slide flex flex-col gap-8 bg-[#f5f6ff] text-left max-[900px]:gap-5">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-extrabold tracking-[0.12em] text-[#5144d8]">JALUR PENDIDIKAN</p>
			<h2
				class="m-0 !text-[48px] !leading-[1.08] !font-bold !tracking-[-0.04em] !text-[#172033] max-[900px]:!text-[38px]"
			>
				Merintis langkah menjadi Programmer profesional
			</h2>
		</header>
		<div class="grid h-[340px] flex-none grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-4 max-[650px]:grid-cols-1 max-[650px]:gap-3">
			<article class="flex min-h-0 flex-col justify-center rounded-[24px] border border-[#e2defe] border-t-[5px] border-t-[#604fe7] bg-white p-5 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-4">
				<span class="inline-block w-fit rounded-full bg-[#604fe7] px-4 py-2 text-[14px] font-extrabold tracking-[0.08em] text-white">
					TAHAP 1
				</span>
				<h3 class="!mt-4 !text-[30px] !leading-[1.12] !font-bold !text-[#172033] max-[900px]:!text-[24px]">Sekolah Menengah</h3>
				<p class="!mt-2 text-[19px] leading-[1.3] font-semibold text-[#586276] max-[900px]:!text-[16px]">
					SMP, SMA, atau SMK
				</p>
				<p class="!mt-3 text-[18px] leading-[1.35] text-[#626b7e] max-[900px]:!text-[15px]">
					Membangun logika, Matematika, Bahasa Inggris, Literasi.
				</p>
			</article>
			<span class="self-center text-[48px] font-light text-[#a6a2d5] max-[650px]:rotate-90" aria-hidden="true">›</span>
			<article class="flex min-h-0 flex-col justify-center rounded-[24px] border border-[#d8edf6] border-t-[5px] border-t-[#078dbd] bg-white p-5 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-4">
				<span class="inline-block w-fit rounded-full bg-[#078dbd] px-4 py-2 text-[14px] font-extrabold tracking-[0.08em] text-white">
					TAHAP 2
				</span>
				<h3 class="!mt-4 !text-[30px] !leading-[1.12] !font-bold !text-[#172033] max-[900px]:!text-[24px]">Perguruan Tinggi</h3>
				<p class="!mt-2 text-[19px] leading-[1.3] font-semibold text-[#586276] max-[900px]:!text-[16px]">
					Informatika / Ilmu Komputer
				</p>
				<p class="!mt-3 text-[18px] leading-[1.35] text-[#626b7e] max-[900px]:!text-[15px]">
					Mempelajari Algoritma, bahasa Pemrograman, sistem Komputer, Jaringan, Basis Data.
				</p>
			</article>
			<span class="self-center text-[48px] font-light text-[#a6a2d5] max-[650px]:rotate-90" aria-hidden="true">›</span>
			<article class="flex min-h-0 flex-col justify-center rounded-[24px] border border-[#d9eee8] border-t-[5px] border-t-[#159a5d] bg-white p-5 shadow-[0_14px_35px_rgba(42,45,91,0.07)] max-[900px]:p-4">
				<span class="inline-block w-fit rounded-full bg-[#159a5d] px-4 py-2 text-[14px] font-extrabold tracking-[0.08em] text-white">
					TAHAP 3
				</span>
				<h3 class="!mt-4 !text-[30px] !leading-[1.12] !font-bold !text-[#172033] max-[900px]:!text-[24px]">
					Belajar Mandiri &amp; Kursus
				</h3>
				<p class="!mt-2 text-[19px] leading-[1.3] font-semibold text-[#586276] max-[900px]:!text-[16px]">
					Kursus, bootcamp &amp; sertifikasi
				</p>
				<p class="!mt-3 text-[18px] leading-[1.35] text-[#626b7e] max-[900px]:!text-[15px]">
					Membangun portofolio, mengikuti perkembangan Teknologi.
				</p>
			</article>
		</div>
	</section>

	<section class="slide flex flex-col gap-11 bg-[#fbfcfe] text-left max-[900px]:gap-7">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-bold tracking-[0.045em] text-[#5144d8]">SUKA &amp; DUKA PROFESI</p>
			<h2
				class="m-0 !text-[39px] !leading-[1.12] !font-bold !tracking-[-0.035em] !text-[#172033] max-[900px]:!text-[31px]"
			>
				Sisi seru dan tantangan menjadi Programmer
			</h2>
			<p class="!mt-3 text-[15px] font-medium text-[#737b8c]">
				<!-- Gunakan tombol berikutnya untuk melihat sisi menyenangkan dan tantangannya. -->
			</p>
		</header>
		<div class="r-stack relative min-h-0 flex-1 overflow-hidden rounded-[22px] bg-[#202a41] shadow-[0_18px_45px_rgba(26,31,72,0.16)]">
			<figure
				class="fragment fade-out relative m-0 h-full w-full overflow-hidden rounded-[22px]"
				data-fragment-index="1"
			>
				<img
					class="absolute inset-0 h-full w-full object-cover object-[center_57%]"
					src={airportPhoto}
					alt="A woman wearing a hijab waits in an airport lounge."
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#111729]/95 via-[#111729]/25 to-transparent"></div>
				<figcaption class="absolute inset-x-0 bottom-0 p-8 text-white max-[700px]:p-5">
					<p class="mb-3 w-fit rounded-full bg-[#159c63]/90 px-4 py-1.5 text-[13px] font-bold tracking-[0.1em] text-white">
						SISI MENYENANGKAN
					</p>
					<h3 class="!mb-3 !text-[34px] !leading-tight !font-bold !text-white max-[700px]:!text-[23px]">
						Karya yang berguna, fleksibilitas yang luas
					</h3>
					<ul class="m-0 grid list-none grid-cols-3 gap-4 p-0 text-[22px] leading-[1.4] text-white/90 max-[700px]:grid-cols-1 max-[700px]:gap-1.5 max-[700px]:text-[13px]">
						<li>Menghasilkan karya yang bermanfaat bagi orang banyak.</li>
						<li>Kesempatan berinteraksi dengan orang lain dari berbagai latar belakang, online maupun offline.</li>
						<li>Kesempatan karier luas, kesempatan bekerja dan belajar di negeri lain.</li>
					</ul>
					<a
						class="mt-3 inline-block text-[11px] !text-white/70 no-underline hover:!text-white hover:underline"
						href="https://www.pexels.com/photo/woman-with-face-mask-sitting-on-chair-in-airport-lounge-16132829/"
						target="_blank"
						rel="noreferrer"
					>
						<!-- Foto: M. Noor TM / Pexels -->
					</a>
				</figcaption>
			</figure>

			<figure
				class="fragment fade-in relative m-0 h-full w-full overflow-hidden rounded-[22px]"
				data-fragment-index="1"
			>
				<img
					class="absolute inset-0 h-full w-full object-cover object-[center_48%]"
					src={meetingPhoto}
					alt="Development team working together, representing the challenges of programming"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-[#111729]/95 via-[#111729]/35 to-transparent"></div>
				<figcaption class="absolute inset-x-0 bottom-0 p-8 text-white max-[700px]:p-5">
					<p class="mb-3 w-fit rounded-full bg-[#dd625a]/90 px-4 py-1.5 text-[13px] font-bold tracking-[0.1em] text-white">
						TANTANGAN NYATA
					</p>
					<h3 class="!mb-3 !text-[34px] !leading-tight !font-bold !text-white max-[700px]:!text-[23px]">
						Belajar terus, teliti, dan jaga kesehatan
					</h3>
					<ul class="m-0 grid list-none grid-cols-3 gap-4 p-0 text-[22px] leading-[1.4] text-white/90 max-[700px]:grid-cols-1 max-[700px]:gap-1.5 max-[700px]:text-[13px]">
						<li>Jika ada "Bugs" pada program, mencari dan memperbaikinya perlu kesabaran.</li>
                        <li>Seringkali ada tenggat waktu yang ketat.</li>
						<li>Tidak boleh berhenti belajar, karena Teknologi terus berubah.</li>
						<li>Banyak duduk di depan layar komputer, harus pandai-pandai menjaga kesehatan.</li>
					</ul>
				</figcaption>
			</figure>
		</div>
	</section>

	
	<section class="slide flex flex-col gap-8 bg-[#fbfcfe] text-left max-[900px]:gap-5">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-bold tracking-[0.045em] text-[#5144d8]">LOGIKA · ALGORITMA</p>
			<h2
				class="m-0 !text-[42px] !leading-[1.08] !font-bold !tracking-[-0.04em] !text-[#172033] max-[900px]:!text-[34px]"
			>
				Mari berpikir seperti program Komputer: mencari Bar yang paling pendek
			</h2>
			<p class="!mt-3 text-[17px] leading-[1.4] text-[#616a7b]">
				<!-- Bandingkan satu per satu, lalu simpan bar terpendek yang ditemukan sejauh ini. -->
			</p>
		</header>

		<div class="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr] items-stretch gap-5 max-[700px]:grid-cols-1">
			<article class="rounded-[17px] bg-[#202a41] p-6 text-[#f5f7fb] max-[900px]:p-5">
				<p class="!mb-4 text-[13px] font-bold tracking-[0.08em] text-[#91a0ff]">ALGORITMA SEDERHANA</p>
				<ol class="m-0 flex list-none flex-col gap-2 p-0 font-mono text-[22px] leading-[1.4] text-[#e6eaf3] max-[900px]:text-[15px]">
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="1">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">1</span>
						<span>Anggap Bar 1 sebagai yang paling pendek.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="2">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">2</span>
						<span>Bandingkan Bar 2. Lebih tinggi, jadi tetap pilih Bar 1.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="3">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">3</span>
						<span>Bandingkan Bar 3. Lebih pendek, jadi pilih Bar 3.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="4">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">4</span>
						<span>Bandingkan Bar 4. Lebih tinggi, tetap pilih Bar 3.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="5">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">5</span>
						<span>Bandingkan Bar 5. Lebih pendek, jadi pilih Bar 5.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg bg-[#121b30] px-3 py-2.5" data-fragment-index="6">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5144d8] text-[14px] font-bold text-white">6</span>
						<span>Bandingkan Bar 6. Lebih tinggi, tetap pilih Bar 5.</span>
					</li>
					<li class="fragment fade-in flex items-start gap-3 rounded-lg border border-[#75d6ac]/35 bg-[#153c3a] px-3 py-2.5 text-[#c7f9dc]" data-fragment-index="7">
						<span class="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-[#159a5d] text-[14px] font-bold text-white">✓</span>
						<span>Semua sudah dibandingkan. Bar 5 adalah yang paling pendek.</span>
					</li>
				</ol>
			</article>

			<article class="flex min-h-0 flex-col rounded-[17px] border border-[#e7eaf1] bg-white p-6 max-[900px]:p-5">
				<p class="!mb-4 text-[26px] font-bold tracking-[0.08em] text-[#737b8c]">6 BAR DENGAN TINGGI BERBEDA</p>
				<div class="flex min-h-0 flex-1 flex-col justify-end rounded-xl bg-[#f5f6ff] px-4 pt-5">
					<div class="flex h-[270px] items-end justify-center gap-4 border-b-2 border-[#cbd0df] px-2 max-[900px]:h-[230px] max-[700px]:h-[175px] max-[700px]:gap-2">
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[145px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[120px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">1</span>
						</div>
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[210px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[175px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">2</span>
						</div>
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[105px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[90px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">3</span>
						</div>
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[180px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[150px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">4</span>
						</div>
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[72px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[62px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">5</span>
						</div>
						<div class="flex h-full w-14 flex-col items-center justify-end gap-2 max-[700px]:w-10">
							<div class="h-[132px] w-full rounded-t-lg bg-[#766cf0] max-[700px]:h-[110px]"></div>
							<span class="pb-2 text-[15px] font-bold text-[#414a60]">6</span>
						</div>
					</div>
					<p class="!mt-3 pb-3 text-center text-[13px] font-semibold text-[#7a8292]">Nomor bar</p>
				</div>

				<div class="r-stack mt-4 min-h-[72px]">
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="1">
						Mulai: Bar 1 adalah yang paling pendek.
					</p>
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="2">
						Bar 2 lebih tinggi. Pilihan sementara: Bar 1.
					</p>
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="3">
						Bar 3 lebih pendek. Pilihan sementara: Bar 3.
					</p>
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="4">
						Bar 4 lebih tinggi. Pilihan sementara: Bar 3.
					</p>
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="5">
						Bar 5 lebih pendek. Pilihan sementara: Bar 5.
					</p>
					<p class="fragment fade-in-then-out flex items-center justify-center rounded-lg bg-[#eeefff] px-4 py-3 text-center text-[22px] font-bold text-[#4039a7]" data-fragment-index="6">
						Bar 6 lebih tinggi. Pilihan sementara: Bar 5.
					</p>
					<p class="fragment fade-in flex items-center justify-center rounded-lg bg-[#e1f7ea] px-4 py-3 text-center text-[26px] font-extrabold text-[#157a4b]" data-fragment-index="7">
						Bar 5 adalah yang paling pendek!
					</p>
				</div>
			</article>
		</div>
	</section>

	<section class="slide flex flex-col gap-11 bg-[#fbfcfe] text-left max-[900px]:gap-7">
		<header class="shrink-0">
			<p class="!mb-3 text-[14px] font-bold tracking-[0.045em] text-[#5144d8]">LOGIKA · ALGORITMA</p>
			<h2
				class="m-0 !text-[39px] !leading-[1.12] !font-bold !tracking-[-0.035em] !text-[#172033] max-[900px]:!text-[31px]"
			>
				Mari berpikir seperti program Komputer: membuat Minuman.
			</h2>
		</header>
		<div class="grid min-h-0 flex-1 grid-cols-[1fr_0.85fr] items-stretch gap-[18px] max-[650px]:grid-cols-1">
			<article class="rounded-[17px] bg-[#202a41] p-[28px_30px] text-[#f5f7fb]">
				<p class="!mb-5 text-[13px] font-bold tracking-[0.04em] text-[#91a0ff]">ALGORITMA SEDERHANA</p>
				<ol
					class="m-0 rounded-[10px] bg-[#121b30] py-5 pr-[22px] pl-[50px] font-mono text-[26px] leading-[1.9] text-[#e6eaf3]"
				>
					<li>Ambil Gelas</li>
					<li><strong class="text-[#ff8189]">JIKA</strong> Teh tersedia <strong class="text-[#ff8189]">MAKA</strong> tuang Teh</li>
					<li><strong class="text-[#ff8189]">JIKA TIDAK, MAKA</strong> tuang Air Putih</li>
					<li>Tambahkan Gula 1 sendok</li>
					<li>Aduk hingga 10 detik</li>
				</ol>
			</article>
			<article class="rounded-[17px] border border-[#e7eaf1] bg-white p-[28px_29px]">
				<h3 class="!mb-[25px] flex items-center gap-2.5 !text-[26px] !font-bold !text-[#172033]">
					<span
						class="inline-flex size-[26px] items-center justify-center rounded-full bg-[#5c4fe3] text-[18px] text-white"
						>?</span
					>
					Pertanyaan diskusi:
				</h3>
				<p class="text-[26px] leading-[1.5] text-[#616a7b]">
					Jika Teh habis, langkah-langkah diatas menghasilkan minuman apa?
				</p>
				<p class="!my-4 rounded-lg bg-[#eeefff] px-[15px] py-3 text-[16px] font-bold text-[#4039a7]">
					<!-- Jawab: Air Manis (Air Putih + Gula)! -->
				</p>
				<p class="text-[22px] leading-[1.5] text-[#616a7b]">
					Komputer bekerja seperti logika ini: menjalankan perintah persis seperti yang tertulis,
					runtut, tanpa mampu menduga-duga.
				</p>
			</article>
		</div>
	</section>

	<section
		class="slide closing relative flex flex-col items-center justify-center overflow-hidden bg-[#141735] bg-cover bg-center px-[78px] py-[66px] text-center text-[#f8f8ff] max-[900px]:px-[42px]"
		style={`background-image: url("${coverTexture}")`}
	>
		<div class="relative z-[1] flex max-w-[1020px] flex-col items-center">
			<img class="mb-[30px] size-[74px] rounded-full bg-[#7b6fff]/[0.18] p-[17px]" src={rocketIcon} alt="" />
			<h2 class="m-0 !text-[48px] !leading-[1.12] !font-bold !tracking-[-0.035em] !text-[#f8f8ff]">
				Tertarik menjadi Programmer?
			</h2>
			<blockquote class="!my-[25px] !mb-[30px] max-w-[780px] text-[20px] leading-[1.55] text-[#c5c6d8]">
				<!-- “Teknologi bukan sekadar untuk dipakai, melainkan diciptakan untuk mempermudah hidup
				banyak orang.” -->
			</blockquote>
			<p class="rounded-[28px] bg-white/10 px-[25px] py-[14px] text-[15px] font-semibold text-[#e3e3ef]">
				Terima Kasih <span class="px-[5px] text-[#9790ff]">•</span> Ada Pertanyaan atau Diskusi?
			</p>
		</div>
	</section>

	<!-- <section
		class="slide sources flex flex-col items-start justify-start overflow-hidden bg-[#141735] bg-cover bg-center p-[70px] text-[#f8f8ff]"
	>
		<div class="max-w-[790px]">
			<h2 class="!mb-[22px] !text-[34px] !font-bold !text-[#f4f5fa]">Image Sources</h2>
			<div class="flex items-center gap-[18px]">
				<img
					class="h-[58px] w-[85px] rounded-[3px] object-cover"
					src={enterpriseImage}
					alt="Thumbnail ilustrasi sistem enterprise"
				/>
				<div>
					<a
						class="text-[14px] leading-[1.55] break-words text-[#c4c9da] no-underline"
						href="https://teamcomputers.com/wp-content/uploads/2026/03/Blog-Feature-image-4-1.png"
					>
						https://teamcomputers.com/wp-content/uploads/2026/03/Blog-Feature-image-4-1.png
					</a>
					<p class="text-[14px] leading-[1.55] text-[#c4c9da]">Source: teamcomputers.com</p>
				</div>
			</div>
		</div>
	</section> -->
</div>

<style>
	:global(.reveal) .slides > section.slide {
		box-sizing: border-box;
		display: flex !important;
		flex-direction: column;
		align-items: stretch;
		justify-content: flex-start;
		height: 100%;
		width: 100%;
		overflow: hidden;
		padding: 66px 78px 62px;
		text-align: left;
	}

	:global(.reveal) .slides > section.slide h1,
	:global(.reveal) .slides > section.slide h2,
	:global(.reveal) .slides > section.slide h3,
	:global(.reveal) .slides > section.slide p,
	:global(.reveal) .slides > section.slide li {
		margin: 0;
		text-align: left;
	}

	:global(.reveal) .slides > section.slide.cover {
		padding: 70px 110px;
	}

	:global(.reveal) .slides > section.slide.programmer-intro {
		padding: 54px 64px;
	}

	@media (max-height: 760px) {
		:global(.reveal) .slides > section.slide.programmer-intro h2 {
			font-size: 42px !important;
		}

		:global(.reveal) .slides > section.slide.programmer-intro .programmer-summary {
			margin-top: 12px !important;
			font-size: 21px !important;
		}

		:global(.reveal) .slides > section.slide.programmer-intro .programmer-responsibilities {
			margin-top: 12px;
		}

		:global(.reveal) .slides > section.slide.programmer-intro .programmer-responsibilities-heading {
			margin-bottom: 5px !important;
		}

		:global(.reveal) .slides > section.slide.programmer-intro .programmer-responsibility-list {
			gap: 4px !important;
		}

		:global(.reveal) .slides > section.slide.programmer-intro .programmer-responsibility {
			font-size: 18px;
			line-height: 1.3;
		}
	}

	:global(.reveal) .slides > section.slide.closing {
		align-items: center;
		justify-content: center;
		padding: 66px 78px 62px;
	}

	:global(.reveal) .slides > section.slide.closing h2,
	:global(.reveal) .slides > section.slide.closing p,
	:global(.reveal) .slides > section.slide.closing blockquote {
		text-align: center;
	}

	:global(.reveal) .slides > section.slide.sources {
		padding: 70px;
	}

	.cover::before,
	.closing::before {
		position: absolute;
		inset: 0;
		background: linear-gradient(105deg, rgb(17 21 48 / 45%), rgb(31 24 91 / 8%));
		content: "";
	}

	@media (max-width: 900px) {
		:global(.reveal) .slides > section.slide {
			padding: 42px;
		}

		:global(.reveal) .slides > section.slide.cover {
			padding: 58px;
		}

		:global(.reveal) .slides > section.slide.programmer-intro {
			padding: 42px;
		}
	}
</style>
