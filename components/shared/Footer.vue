<template>
  <div class="hero-footer footer footer-custom">
    <div class="container">
      <div class="has-text-centered">
        <span class="icon">
          <a target="_" href="https://github.com/Ntuk"><i class="fab fa-github" fa-rotate-270></i></a>
        </span>
        <span class="icon">
          <a target="_" href="https://www.facebook.com/nico.tukiainen"><i class="fab fa-facebook"></i></a>
        </span>
        <span class="icon">
          <a target="_" href="https://www.instagram.com/nicotuk/"><i class="fab fa-instagram"></i></a>
        </span>
        <span class="icon">
          <a target="_" href="https://discordapp.com/users/ntuk#2369"><i class="fab fa-discord"></i></a>
        </span>
        <span class="icon">
          <a target="_" href="https://www.linkedin.com/in/nico-tukiainen-a97442131/"><i class="fab fa-linkedin"></i></a>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  /* footer */
  .footer {
    display: flex;
    justify-content: center;
    align-items:  center;
    background: rgb(52,73,94);
    background: radial-gradient(circle, rgba(52,73,94,1) 0%, rgba(44,62,80,1) 100%);
  }
  .icon {
    // margin-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 25px;

    i {
      &:hover {
        animation: anim-glow 2s ease infinite;
      }
    }
    .fa-instagram, .fa-discord, .fa-linkedin {
      &:hover {
        animation: anim-glow-square 2s ease infinite;
      }
    }
  }
  @keyframes anim-glow {
	0% {
    border-radius:  50%;
		box-shadow: 0 0 rgba(#f1c40f, 1);
	}
	100% {
    border-radius:  50%;
		box-shadow: 0 0 10px 8px transparent;
		border-width: 2px;
	}
}
  @keyframes anim-glow-square {
	0% {
    border-radius:  35%;
		box-shadow: 0 0 rgba(#f1c40f, 1);
	}
	100% {
    border-radius:  35%;
		box-shadow: 0 0 10px 8px transparent;
		border-width: 2px;
	}
}
  .footer-custom {
      background-color: #0d0c0d;
      color: #fff;
  }
  .footer-custom p {
      font-size: 1rem;
      font-weight: 500;
  }
  .footer-custom a {
      color: #e67e22;
  }
  .footer-custom a:hover {
      color: #d35400;
  }
</style>
