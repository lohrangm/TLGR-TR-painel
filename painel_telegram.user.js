// ==UserScript==
// @name         Gestor TLGR - Painel
// @name:pt      TLGMaster
// @name:pt-BR   TLGMaster
// @name:en      TLGMaster
// @namespace    telegram-top-reacoes
// @version      2026.10.23.2
// @description  Login e scanner de reacoes, busca de grupos/canais e mais, tudo direto dentro do Telegram Web, sem servidor local - cliente MTProto rodando em JS puro no proprio navegador
// @match        https://web.telegram.org/*
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/lohrangm/TLGR-TR-painel/main/painel_telegram.user.js
// @downloadURL  https://raw.githubusercontent.com/lohrangm/TLGR-TR-painel/main/painel_telegram.user.js
// @require      https://raw.githubusercontent.com/lohrangm/TLGR-TR-painel/main/principal/painel_principal-2026.10.23.2.js#sha256=50be4a15d5170260045b425afc545047410266a849b0ac17dfadcceb925caf8d
// ==/UserScript==

// Arquivo gerado automaticamente por montar_userscript.mjs - nao editar.
// (No arquivo com o bundle, procure "FIM DO BUNDLE DO TELEPROTO" pra achar
// onde comeca a parte escrita a mao, em painel_logic.js.)


// Carregador do TLGMaster (gerado por montar_userscript.mjs). O codigo
// principal vem pelo @require acima e ja rodou antes desta parte.
(function () {
    "use strict";
    var VERSAO_DO_CARREGADOR = "2026.10.23.2";
    var carregada = typeof window.TRP_VERSAO === "string" ? window.TRP_VERSAO : null;
    if (carregada === VERSAO_DO_CARREGADOR) return;
    var texto = carregada
        ? "TLGMaster: o c├│digo principal (" + carregada + ") n├úo ├® o desta vers├úo (" + VERSAO_DO_CARREGADOR + "). No Tampermonkey, clique em Verificar atualiza├º├Áes; se continuar, reinstale o script."
        : "TLGMaster: o c├│digo principal n├úo carregou (internet caiu na instala├º├úo ou o arquivo n├úo bateu com o esperado). No Tampermonkey, clique em Verificar atualiza├º├Áes; se continuar, reinstale o script.";
    function mostrar() {
        if (!document.body) return setTimeout(mostrar, 500);
        var aviso = document.createElement("div");
        aviso.id = "trp-aviso-carregador";
        aviso.setAttribute("role", "alert");
        aviso.style.cssText = "position:fixed;left:16px;bottom:16px;z-index:2147483647;max-width:420px;padding:12px 14px;border-radius:8px;background:#1f232c;color:#e6e8ec;border:1px solid #ff6b6b;font:14px/1.45 sans-serif;box-shadow:0 4px 16px rgba(0,0,0,0.4);";
        aviso.textContent = texto;
        document.body.appendChild(aviso);
    }
    mostrar();
})();
