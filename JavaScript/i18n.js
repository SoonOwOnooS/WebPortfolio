(() => {
    "use strict";

    const storageKey = "portfolio.language.v2";
    const messages = { en: Object.create(null), zh: Object.create(null) };
    const sourceKeys = new Map();
    const normalize = value => String(value || "").replace(/[‘’]/g, "'").replace(/…/g, "...").replace(/\s+/g, " ").trim();

    function add(key, english, chinese, ...aliases) {
        messages.en[key] = english;
        messages.zh[key] = chinese;
        [english, chinese, ...aliases].forEach(value => sourceKeys.set(normalize(value), key));
    }

    add("page.title", "Woon Soon Portfolio Website", "Woon Soon Portfolio Website");
    add("page.description", "Woon Soon’s portfolio of game development, 3D art and design projects.", "Woon Soon 的个人作品集，记录游戏开发、3D 艺术与设计项目。");
    add("nav.home", "Home", "首页");
    add("nav.about", "About", "关于");
    add("nav.work", "Work", "作品", "Portfolio");
    add("nav.contact", "Contact", "联系");
    add("hero.eyebrow", "GAME DEVELOPMENT · 3D ART", "游戏开发 · 3D 艺术");
    add("hero.intro", "Building worlds. Bringing ideas to life.", "构筑世界，让想法生长。", "Building worlds. / Bringing ideas to life.");
    add("hero.line1", "Building worlds.", "构筑世界。");
    add("hero.line2", "Bringing ideas to life.", "让想法生长。");
    add("hero.description", "Games, digital art and the work behind them.", "游戏、数字艺术，以及创作背后的探索。");
    add("hero.cta", "Explore my work", "探索我的作品");
    add("hero.scroll", "SCROLL TO EXPLORE", "向下探索");
    add("social.label", "ELSEWHERE", "在其他地方找到我");
    add("social.contact", "Email", "邮箱");
    add("brand.edition", "PORTFOLIO / 2026", "作品集 / 2026");
    add("hero.featureLabel", "FEATURED / 3D ENVIRONMENT", "精选 / 3D 场景");
    add("hero.featureTitle", "Cyberpunk Railway", "Cyberpunk Railway");
    add("about.eyebrow", "01 — ABOUT", "01 — 关于我");
    add("about.title", "A little about me.", "关于我的一些事。");
    add("about.status", "Open to opportunities", "期待新的机会");
    add("about.intro", "I explore game development through programming, level design and 3D art.", "我通过编程、关卡设计与 3D 艺术，探索游戏开发的可能。");
    add("work.eyebrow", "02 — SELECTED WORK", "02 — 精选作品");
    add("work.title", "Ideas, made playable.", "让想法，变得可玩。");
    add("work.description", "Game demos, 3D worlds and visual experiments.", "游戏原型、3D 世界与视觉实验。");
    add("contact.eyebrow", "03 — GET IN TOUCH", "03 — 保持联系");
    add("contact.title", "Let’s make something.", "一起创造些什么。");
    add("contact.description", "Have a project in mind? Leave me a message.", "有项目想法？欢迎给我留言。");
    add("filter.technical", "Game Development", "游戏开发", "Technical Projects");
    add("filter.design", "Art & Design", "美术与设计", "Design Works");
    add("filter.all", "All", "全部");
    add("filter.solo", "Solo", "个人", "Person");
    add("filter.group", "Team", "团队", "Group");
    add("filter.unity", "Unity", "Unity");
    add("filter.unreal", "Unreal", "Unreal");
    add("filter.2d", "2D", "2D");
    add("filter.3d", "3D", "3D");
    add("filter.empty", "No projects match these filters. Try selecting All.", "暂时没有符合条件的作品，请尝试选择「全部」。");
    add("action.details", "View project", "查看项目", "Read More");
    add("scroll.label", "SCROLL", "向下滚动");
    add("form.name", "Name", "姓名", "Name:");
    add("form.email", "Email", "邮箱", "Email:");
    add("form.message", "Message", "留言", "Message:");
    add("form.send", "Send message", "发送留言", "Send Message");
    add("skills.title", "Tools & skills", "工具与技能", "Skills", "Skill");
    add("footer.rights", "© 2026 Woon Soon's Portfolio. All rights reserved.", "© 2026 Woon Soon 的作品集。保留所有权利。");

    add("role.0", "Programmer", "程序员");
    add("role.1", "Game Developer", "游戏开发者");
    add("role.2", "3D Generalist", "3D 综合艺术家", "3D Genelist");
    add("legacy.welcome", "Welcome to my", "欢迎来到我的");
    add("legacy.portfolio", "portfolio", "作品集", "profolio");
    add("legacy.heroDescription", "Discover my tech projects, art, and more.", "探索我的技术项目、艺术作品与更多创作。");
    add("legacy.status", "Currently Unemployed", "目前待业");
    add("legacy.greeting", "Hi I'm Woon Soon", "你好，我是 Woon Soon");
    add("legacy.passion", "I'm a passionate", "我热爱成为一名");
    add("legacy.toolsIntro", "I am honing my skills in game development with these tools:", "我正在使用这些工具，持续磨练游戏开发技能：", "I am honing my skills in game development, I learned:");
    add("legacy.about", "About Me", "关于我");
    add("about.education", "Education", "教育背景");
    add("about.educationDescription", "I studied Game Development at Asia Pacific University for my bachelor’s degree.", "我曾就读于亚太科技大学（APU），主修游戏开发学士课程。", "I studyed in Asia Pacific University major in bachelor's degree of Game Development");
    add("about.projects", "Projects", "项目经历", "Project");
    add("about.projectsDescription", "I currently have 6 game demos developed in Unity3D and Unreal Engine", "目前，我已使用 Unity3D 与 Unreal Engine 开发了 6 个游戏原型。");
    add("skills.art", "Art / 3D", "美术 / 3D", "Art/3D");
    add("skills.other", "Other skills", "其他技能", "Other Skills", "Other Skill");
    add("skills.drawing", "Drawing", "绘画");
    add("skills.web", "Web", "网页开发");
    add("skills.familiar", "Familiar", "熟悉", "Normal");
    add("skills.basic", "Basic knowledge", "了解", "Understand");
    add("skills.beginner", "Beginner", "入门");
    add("filter.technicalDescription", "Game development projects built with Unity and Unreal Engine.", "使用 Unity 与 Unreal Engine 完成的游戏开发项目。", "The technical projects I have worked on game development, Unity and Unreal Engine.");
    add("filter.designDescription", "Digital paintings, 3D models, interface designs and posters.", "数字绘画、3D 模型、界面设计与海报创作。", "The design works I have created include digital paintings, 3D modeling, figma and poster.");
    add("project.meta.environment", "3D / ENVIRONMENT", "3D / 场景");
    add("project.meta.design", "2D / VISUAL DESIGN", "2D / 视觉设计");
    add("meta.prop", "3D / PROP", "3D / 道具");
    add("legacy.contactTitle", "Send Me a Message", "给我留言", "Send Me Message");

    add("project.defiance.title", "Code of Defiance", "Code of Defiance");
    add("project.defiance.description", "A game demo by a team of students, a game demo about an AI rescuing a mentally devastated man. He is seen as having a connection to the war enterprise.", "由学生团队制作的游戏原型，讲述一名 AI 拯救精神遭受重创的男子的故事，而这名男子似乎与一家军工企业有所关联。");
    add("project.zongzi.title", "Zongzi Across Asia", "Zongzi Across Asia");
    add("project.zongzi.description", "A game demo by a team of students, A restaurant simulation game surrendered by ASEAN theme, to promoting about food, culture and unity.", "由学生团队制作、以东盟为主题的餐厅经营游戏原型，通过美食传递文化交流与团结的理念。");
    add("project.dino.title", "Dino Tales", "Dino Tales");
    add("project.dino.description", "A game demo by a team of students, Year2 sem 1 project, 3D-platformer game about a dino climbing the giant plant and platform produced from the magic bean.", "大二第一学期的学生团队项目。一款 3D 平台跳跃游戏，小恐龙需要攀登由魔豆长出的巨大植物与平台。");
    add("project.dino.detail", "A game demo by a team of students, 3D-platformer game about a dino climbing the giant plant and platform produced from the magic bean.", "由学生团队制作的 3D 平台跳跃游戏原型，小恐龙需要攀登由魔豆长出的巨大植物与平台。");
    add("project.witch.title", "The Witch Lament Poet", "The Witch Lament Poet", "The Witch Lament Poel");
    add("project.witch.description", "A game demo by a team of students, Year2 sem 1 project, A very disgraceful project, story about the last witch's doppelganger.", "大二第一学期的学生团队游戏原型。一个并不体面的项目，讲述最后一位女巫分身的故事。");
    add("project.witch.detail", "A very disgraceful project, story about the last witch's doppelganger, Her birth also signifies that the witch entity and magic are teetering on the brink of collapse. Every doppelganger is purity but it don't meant their entity is a person who is easy to get along with. All of them for the entity, just a toys that can be destroyed and manipulate. However it's luckly also unluckly, she haven't meet with her entity, but her birth is company of death.", "一个并不体面的项目，讲述最后一位女巫分身的故事。她的诞生，也意味着女巫本体与魔法正在濒临崩溃。每个分身都纯洁无瑕，但这并不意味着她们的本体容易相处。对于本体而言，她们只是可以随意毁坏和操纵的玩具。幸运又不幸的是，她尚未遇见自己的本体，却在诞生之时便与死亡相伴。");
    add("project.pillow.title", "The War Pillow Fight", "The War Pillow Fight");
    add("project.pillow.description", "A game demo by a team of students, Year3 sem 1 project, Multiplayer project, gameplay about player fight over the pillow and attack the designated opponent", "大三第一学期的学生团队游戏原型。玩家在多人对战中争夺枕头，并攻击指定的对手。");
    add("project.trpg.title", "TRPG Toolkit", "TRPG Toolkit");
    add("project.trpg.description", "A Unity IMGUI toolkit related to TRPG game mechanism but not fully following. Project 2D art - Tactics Ogre video game copyright by Square Enix.", "一个基于 Unity IMGUI 的工具包，参考了 TRPG 游戏机制，但并非完全遵循。项目中使用的《Tactics Ogre》2D 美术素材版权归 Square Enix 所有。", "A Unity IMGUI toolkit related to TRPG game mechanism but not fully following. Project 2D art - Tactic Orge video game copyright by Square Enix.");
    add("project.island.title", "Steampunk Island", "Steampunk Island");
    add("project.island.description", "A game demo by a team of students, Year3 sem 1 project, Unreal Engine asset crafting and environment placing group project.", "大三第一学期的学生团队项目，使用 Unreal Engine 完成资产制作与场景布置。");
    add("project.studypal.title", "Figma - StudyPal", "Figma - StudyPal", "StudyPal");
    add("project.studypal.description", "A StudyPal usability mobile application design, project done by group.", "由小组共同完成的 StudyPal 移动应用设计，重点探索应用的可用性。");
    add("project.studypal.detail", "A StudyPal usability mobile application design, project done by group. Damm...this course only come to decrease my CGPA.", "由小组共同完成的 StudyPal 移动应用可用性设计。唉……这门课仿佛只是来拉低我的 CGPA 的。");
    add("project.liliya.title", "Drawing - Liliya莉莉娅", "Drawing - Liliya莉莉娅");
    add("project.liliya.description", "A drawing of a character named Liliya, character design and drawing by myself", "一幅名为「莉莉娅」的角色绘画，角色设计与绘画均由我独立完成。");
    add("project.postcard.title", "Postcard Mock Up", "Postcard Mock Up", "Postcard");
    add("project.postcard.description", "A postcard design in my Year 1 Semester 1, Topic about the video game - Octopath Traveller.", "大一第一学期的明信片设计，以游戏《Octopath Traveller》为主题。");
    add("project.station.title", "Building Model - Malaysia Railway Station", "Building Model - Malaysia Railway Station", "Malaysia Railway Station Building");
    add("project.station.description", "A 3D Modelling craft by myself, refers to Malaysia, Selangor Historical Railway Station.", "独立制作的 3D 建筑模型，参考了马来西亚雪兰莪州的一座历史火车站。");
    add("project.cyberpunk.title", "Cyberpunk Railway - Personal Part", "Cyberpunk Railway - Personal Part", "Cyberpunk Railway Station - Individual Video Clip", "Cyberpunk Railway Station - Individual Video Chip");
    add("project.cyberpunk.description", "The group assignment project but individual video clips. One 3D rendered video.", "小组课程项目中的个人部分，一段独立完成的 3D 渲染短片。");
    add("project.machine.title", "Steampunk machine - Asset", "Steampunk machine - Asset", "Steampunk Machine - Props Machine");
    add("project.machine.description", "The steampunk machine 3D modelling asset refer image by Praveen Kumar, modelled by me.", "参考 Praveen Kumar 的图片，由我制作的蒸汽朋克机械 3D 道具模型。");

    add("detail.contributors", "Project contributors", "项目参与者", "Project Contributor");
    add("detail.source", "Source", "项目资源");
    add("detail.video", "Video", "视频");
    add("detail.software", "Software", "使用软件");
    add("detail.screenshots", "Screenshots", "项目截图", "Screenshot");
    add("detail.documentation", "Documentation", "项目文档");
    add("detail.developmentLog", "Development log (outside project scope)", "开发记录（项目范围之外）", "Development Log (Out Scope)");
    add("detail.uv", "UV Mapping", "UV 展开");
    add("position.programmer", "Programmer", "程序员");
    add("position.levelDesign", "Level Design", "关卡设计");
    add("position.gameDesign", "Game Design", "游戏设计");
    add("position.3dArtist", "3D Artist", "3D 美术");
    add("position.2dArtist", "2D Artist", "2D 美术");
    add("position.artist", "Artist", "美术");
    add("position.characterArtist", "Character Artist", "角色美术");
    add("position.environment", "Environment", "场景制作", "Enivronment");
    add("position.rigging", "Rigging", "角色绑定");
    add("position.designer", "Designer", "设计师");
    add("position.appDesigner", "App Designer", "应用设计");
    add("position.survey", "Survey Proposer", "调研方案");
    add("position.proposer", "Proposer", "方案策划");
    add("position.tester", "Tester", "测试");

    add("github.fallback", "View my projects on GitHub", "在 GitHub 查看我的项目");
    add("github.loading", "Loading...", "加载中……");
    add("github.count", "Public repositories: {count}", "公开仓库：{count}");
    add("github.repositories", "Public repositories: {count}", "公开仓库：{count}");
    add("aria.navigation", "Main navigation", "主导航");
    add("aria.brandHome", "Hoo Woon Soon — Home", "Hoo Woon Soon — 首页");
    add("aria.language", "Language", "语言", "Language / 语言");
    add("aria.pageSections", "Page sections", "页面章节");
    add("aria.home", "Home", "首页", "Home / 首页");
    add("aria.about", "About", "关于", "About / 关于");
    add("aria.work", "Work", "作品", "Work / 作品");
    add("aria.contact", "Contact", "联系", "Contact / 联系");
    add("aria.social", "Social links", "社交链接");
    add("aria.backTop", "Back to top", "返回顶部", "Back to top / 返回顶部");
    add("aria.viewFeatured", "View Cyberpunk Railway", "查看赛博朋克车站项目");
    add("aria.featuredImage", "Cyberpunk Railway — 3D environment by Hoo Woon Soon", "赛博朋克车站 — Hoo Woon Soon 创作的 3D 场景");
    add("aria.projectTeam", "Project team", "项目协作方式");
    add("aria.workCategories", "Work categories", "作品分类");
    add("aria.closeProject", "Close project", "关闭项目");
    add("aria.closeImage", "Close image viewer", "关闭图片查看器", "Close image");
    add("aria.previousImage", "Previous image", "上一张图片");
    add("aria.nextImage", "Next image", "下一张图片");
    add("aria.viewImage", "View full-size project image", "查看项目原图");
    add("aria.imageViewer", "Project image viewer", "项目图片查看器", "Image viewer");
    add("aria.imageCounter", "Project image viewer, image {index} of {count}", "项目图片查看器，第 {index} 张，共 {count} 张");
    add("aria.projectImage", "Project image", "项目图片", "Expanded project image");
    add("aria.profile", "Woon Soon’s profile picture", "Woon Soon 的头像");
    add("aria.logo", "Logo", "标志");

    let language = "en";
    try {
        const savedLanguage = window.localStorage.getItem(storageKey);
        if (savedLanguage === "en" || savedLanguage === "zh") language = savedLanguage;
    } catch {
        // The default remains available when browser storage is disabled.
    }

    function t(key, fallback) {
        return messages[language][key] ?? messages.en[key] ?? fallback ?? key;
    }

    function fill(key, values, targetLanguage = language) {
        return messages[targetLanguage][key].replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
    }

    const positionKeys = new Set([
        "position.programmer", "position.levelDesign", "position.gameDesign", "position.3dArtist",
        "position.2dArtist", "position.artist", "position.characterArtist", "position.environment",
        "position.rigging", "position.designer", "position.appDesigner", "position.survey",
        "position.proposer", "position.tester", "role.2"
    ]);

    function translateText(source, targetLanguage = language) {
        const normalized = normalize(source);
        const key = sourceKeys.get(normalized);
        if (key) {
            if (/^project\..*\.title$/.test(key) || key === "hero.featureTitle") return normalized;
            return messages[targetLanguage][key];
        }

        const repositories = normalized.match(/^(?:Public (?:repositories|repos):\s*|公开仓库[：:]\s*)(\d+)$/);
        if (repositories) return fill("github.count", { count: repositories[1] }, targetLanguage);
        const counter = normalized.match(/^Project image viewer, image (\d+) of (\d+)$/) || normalized.match(/^项目图片查看器，第 (\d+) 张，共 (\d+) 张$/);
        if (counter) return fill("aria.imageCounter", { index: counter[1], count: counter[2] }, targetLanguage);

        const parts = normalized.split(/[,，、]\s*/);
        if (parts.length > 1) {
            const keys = parts.map(part => sourceKeys.get(normalize(part)));
            if (keys.every(partKey => positionKeys.has(partKey))) {
                return keys.map(partKey => messages[targetLanguage][partKey]).join(targetLanguage === "zh" ? "、" : ", ");
            }
        }
        return null;
    }

    const boundLanguageButtons = new WeakSet();
    const protectedText = "h1, h2, h3, .panel .title, .category-title, .word, .brand, .project-meta";
    const ignoredText = `script, style, title, svg, textarea, code, pre, [data-i18n-ignore], [data-role-text], ${protectedText}`;
    const attributes = ["aria-label", "placeholder"];
    const textOriginals = new WeakMap();
    const explicitOriginals = new WeakMap();
    const attributeOriginals = new WeakMap();
    let observer = null;
    let applying = false;

    function preserveSpacing(source, translated) {
        return source.match(/^\s*/)[0] + translated + source.match(/\s*$/)[0];
    }

    function englishSource(source, key) {
        const english = key ? messages.en[key] : translateText(source, "en");
        const chinese = key ? messages.zh[key] : translateText(source, "zh");
        if (english != null && chinese != null && english !== chinese && normalize(source) === normalize(chinese)) {
            return preserveSpacing(source, english);
        }
        return source;
    }

    function originalState(previous, current, key) {
        if (previous && previous.last === current) return previous;
        return { english: englishSource(current, key), last: current };
    }

    function elementsWithin(root, selector) {
        const elements = root.querySelectorAll ? [...root.querySelectorAll(selector)] : [];
        if (root.nodeType === 1 && root.matches(selector)) elements.unshift(root);
        return elements;
    }

    function translateNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest(ignoredText) || parent.closest("[data-i18n]")) return;
        const current = node.nodeValue;
        if (translateText(current, "zh") === null) return;
        const state = originalState(textOriginals.get(node), current);
        const translated = translateText(state.english, "zh");
        const next = language === "en" ? state.english : preserveSpacing(state.english, translated);
        if (next !== current) node.nodeValue = next;
        state.last = next;
        textOriginals.set(node, state);
    }

    function apply(root = document) {
        if (!root || applying) return;
        applying = true;
        observer?.disconnect();
        try {
            elementsWithin(root, "[data-i18n]").forEach(element => {
                if (element.closest(protectedText) || element.closest("[data-i18n-ignore]")) return;
                const key = element.dataset.i18n;
                const state = originalState(explicitOriginals.get(element), element.textContent, key);
                const translated = language === "en" ? state.english : t(key, state.english);
                if (element.textContent !== translated) element.textContent = translated;
                state.last = translated;
                explicitOriginals.set(element, state);
            });

            const attributeSelector = attributes.map(attribute => `[${attribute}], [data-i18n-${attribute}]`).join(", ");
            elementsWithin(root, attributeSelector).forEach(element => {
                if (element.closest("[data-i18n-ignore]")) return;
                attributes.forEach(attribute => {
                    if (attribute === "aria-label" && element.matches('.panel, [role="dialog"]:not(#imageViewer)')) return;
                    const key = element.getAttribute(`data-i18n-${attribute}`);
                    const current = element.getAttribute(attribute) || "";
                    const chinese = key ? t(key, current) : translateText(current, "zh");
                    if (chinese === null) return;
                    const states = attributeOriginals.get(element) || new Map();
                    const state = originalState(states.get(attribute), current, key);
                    const translated = language === "en" ? state.english : key ? t(key, state.english) : translateText(state.english, "zh");
                    if (translated !== current) element.setAttribute(attribute, translated);
                    state.last = translated;
                    states.set(attribute, state);
                    attributeOriginals.set(element, states);
                });
            });

            if (root.nodeType === 3) translateNode(root);
            else {
                const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
                let node;
                while ((node = walker.nextNode())) translateNode(node);
            }

            elementsWithin(root, "[data-language]").forEach(button => {
                const buttonLanguage = button.dataset.language;
                if (buttonLanguage !== "en" && buttonLanguage !== "zh") return;
                button.setAttribute("aria-pressed", String(buttonLanguage === language));
                if (!boundLanguageButtons.has(button)) {
                    button.addEventListener("click", () => setLanguage(buttonLanguage));
                    boundLanguageButtons.add(button);
                }
            });
        } finally {
            applying = false;
            if (observer && document.documentElement) {
                observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
            }
        }
    }

    function updateDocument() {
        document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
        document.title = t("page.title");
        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = t("page.description");
        apply();
    }

    function setLanguage(nextLanguage) {
        if (nextLanguage !== "en" && nextLanguage !== "zh") return;
        const changed = language !== nextLanguage;
        language = nextLanguage;
        try {
            window.localStorage.setItem(storageKey, language);
        } catch {
            // Language switching still works without persistent storage.
        }
        updateDocument();
        if (changed) window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
    }

    window.portfolioI18n = Object.freeze({
        get language() { return language; },
        get roles() { return [t("role.0"), t("role.1"), t("role.2")]; },
        t,
        apply,
        setLanguage
    });

    function initialize() {
        updateDocument();
        observer = new MutationObserver(records => {
            const roots = new Set();
            records.forEach(record => {
                if (record.type === "characterData") roots.add(record.target.parentElement || record.target);
                record.addedNodes.forEach(node => {
                    if (node.nodeType === 1 || node.nodeType === 3) roots.add(node.parentElement?.closest("[data-i18n]") || node);
                });
            });
            roots.forEach(root => { if (root.isConnected) apply(root); });
        });
        observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
        window.dispatchEvent(new CustomEvent("languagechange", { detail: { language } }));
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
    else initialize();
})();
