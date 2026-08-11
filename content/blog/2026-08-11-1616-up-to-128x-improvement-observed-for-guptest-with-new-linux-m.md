+++
title = "Up To 12.8x Improvement Observed For gup_test With New Linux MM Patches"
date = 2026-08-11
description = "Rik van Riel, a Linux developer, has implemented significant improvements in gup_test through new kernel MM (memory management) patches utilizing batching for larger batch size reductions. These optimizations have likely led to substantial performance gains, with up to 12.8x possible improvements observed using these techniques."
tags = ["unread"]
extra.source_url = "https://www.phoronix.com/news/Linux-Batch-Follow-Page-Mask"
+++

Linux developer Rik van Riel has pulled off some nice Linux kernel optimizations over the years and the Meta engineer has been working on another one around batching of look-ups with Linux's follow_page_mask() that is used for translating virtual addresses to the corresponding struct page...
