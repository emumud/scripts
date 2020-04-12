function (context, args) {
  return `accts.balance              gui.chats                  scripts.sys
accts.balance_of_owner     gui.quiet                  scripts.trust
accts.transactions         gui.size                   scripts.user
accts.xfer_gc_to           gui.vfx                    sys.access_log
accts.xfer_gc_to_caller    gui.vol                    sys.breach
autos.reset                kernel.hardline            sys.cull
chats.channels             market.browse              sys.init
chats.create               market.buy                 sys.loc
chats.join                 market.sell                sys.manage
chats.leave                market.stats               sys.specs
chats.send                 scripts.ensure_highsec     sys.status
chats.tell                 scripts.ensure_lowsec      sys.upgrade_log
chats.users                scripts.ensure_midsec      sys.upgrades
corps.create               scripts.ensure_nullsec     sys.upgrades_of_owner
corps.hire                 scripts.fullsec            sys.xfer_upgrade_to
corps.manage               scripts.get_access_level   sys.xfer_upgrade_to_caller
corps.offers               scripts.get_level          trust.me
corps.quit                 scripts.highsec            users.active
corps.top                  scripts.lowsec             users.config
escrow.charge              scripts.midsec             users.inspect
escrow.confirm             scripts.nullsec            users.last_action
escrow.stats               scripts.quine              users.top                 `;
}